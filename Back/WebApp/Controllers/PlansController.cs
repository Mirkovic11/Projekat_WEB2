using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using WebApp.DTOs;
using WebApp.Models;
using WebApp.Models.NtoNClasses;
using WebApp.Repository;

namespace WebApp.Controllers
{

  [Route("api/[controller]")]
  [ApiController]
  [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
  public class PlansController : ControllerBase
  {
    private readonly DataDBContext data;
    private readonly AuthenticationDBContext auth;
    private UserManager<User> manager;

    public PlansController(UserManager<User> u, DataDBContext d, AuthenticationDBContext a)
    {
      manager = u;
      data = d;
      auth = a;
    }


    [HttpGet]
    public IActionResult Get()
    {
      List<PlanDataDTO> list = new List<PlanDataDTO>();
      foreach (WorkPlan item in data.WorkPlans)
      {
        list.Add(new PlanDataDTO()
        {
          Type = item.Type,
          Status = item.Status,
          WorkOrderId = item.WorkOrder.Id,
          StartTime = item.StartTime,
          EndTime = item.EndTime,
          Purpose = item.Purpose,
          Notes = item.Notes,
          Company = item.Company,
          DateCreated = item.DateCreated

        });
      }

      return Ok(new { list });
    }

    [HttpGet]
    [Route("GetPlanIds")]
    public IActionResult GetPlanIds()
    {

      List<int> lista = new List<int>();
      foreach (WorkPlan item in data.WorkPlans)
      {
        lista.Add(item.Id);
      }

      return Ok(new { lista });
    }

    [HttpGet]
    [Route("GetPlanStatus/{id}")]
    public string GetPlanStatus(int id)
    {
      string status = (data.WorkPlans.FirstOrDefault(x => x.Id == id)).Status;
      return status;
    }



    [HttpPost]
    public async Task<IActionResult> Post([FromBody] PlanDTO body)
    {
      string id = User.Claims.First(x => x.Type == "UserID").Value;
      string role = auth.Users.FirstOrDefault(x => x.Id == id).Role;
      if (role == "Dispatcher")
      {
        WorkPlan temp = new WorkPlan
        {
          Type = body.Plan.Type,
          Status = body.Plan.Status,
          WorkOrder = data.WorkOrders.FirstOrDefault(x => x.Id == body.Plan.WorkOrderId),
          StartTime = body.Plan.StartTime,
          EndTime = body.Plan.EndTime,
          UserID = id,
          Purpose = body.Plan.Purpose,
          Notes = body.Plan.Notes,
          Company = body.Plan.Company,
          DateCreated = DateTime.Now,
          Crew = data.Crews.FirstOrDefault(x => x.Id == body.Crew)
        };
        foreach (DeviceDTO item in body.Devices)
        {
          await data.WorkPlansDevices.AddAsync(new WorkPlanDevice { WorkPlan = temp, Device = data.Devices.FirstOrDefault(x => x.Name == item.Name) });

        }
        await data.WorkPlans.AddAsync(temp);
        await data.SaveChangesAsync();
        return Ok();
      }
      else
      {
        return Unauthorized();
      }
    }

    [HttpPatch]
    [Route("ChangeState")]
    public async Task<IActionResult> ChangeState([FromBody] StateDTO body)
    {
      foreach (WorkPlan item in data.WorkPlans)
      {
        if (item.Id == body.Id)
        {
          item.Status = body.Status;
          data.Entry(item).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
          break;
        }

      }
      await data.SaveChangesAsync();
      return Ok();

    }
  }
}
