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
 // [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
  public class IncidentsController : ControllerBase
  {

    private readonly DataDBContext data;
    private readonly AuthenticationDBContext authentification;
    private UserManager<User> manager;

    public IncidentsController(DataDBContext d, AuthenticationDBContext a, UserManager<User> u)
    {
      data = d;
      authentification = a;
      manager = u;
    }





    [HttpPost]
    public async Task<IActionResult> Post([FromBody] IncidentDTO body)
    {
     // string id = User.Claims.First(x => x.Type == "UserID").Value;
      //string role = authentification.Users.FirstOrDefault(x => x.Id == id).Role;


      if (body.Role != "Dispatcher")
      {
        return Unauthorized();
      }
      else
      {
        Incident inc = new Incident();
        inc.Type = body.Incident.Type;
        inc.Confirmed = body.Incident.Confirmed;
        inc.Status = body.Incident.Status;
        inc.ETA = body.Incident.ETA;
        inc.ATA = body.Incident.ATA;
        inc.ETR = body.Incident.ETR;
        inc.AffectedCustomers = body.Incident.AffectedCustomers;
        inc.Voltage = body.Incident.Voltage;
        inc.ScheduledTime = body.Incident.ScheduledTime;
        inc.Cause = body.Incident.Cause;
        inc.Subcause = body.Incident.SubCause;
        inc.ConstructionType = body.Incident.ConstructionType;
        inc.Material = body.Incident.Material;
        inc.Crew = data.Crews.FirstOrDefault(x => x.Id == body.Crew);

        foreach (DeviceDTO device in body.Devices)
        {
          await data.IncidentsDevices.AddAsync(new IncidentDevice() { Incident = inc, Device = data.Devices.FirstOrDefault(x => x.Name == device.Name) });
        }

        await data.Incidents.AddAsync(inc);
        await data.SaveChangesAsync();
        return Ok();
     }
    }

    [HttpGet]
    public IActionResult Get()
    {
      List<IncidentDataDTO> lista = new List<IncidentDataDTO>();

      foreach(Incident item in data.Incidents)
      {
        IncidentDataDTO inc = new IncidentDataDTO();
        inc.Type = item.Type;
        inc.Confirmed = item.Confirmed;
        inc.Status = item.Status;
        inc.ETA = item.ETA;
        inc.ATA = item.ATA;
        inc.ETR = item.ETR;
        inc.AffectedCustomers = item.AffectedCustomers;
        inc.Voltage = item.Voltage;
        inc.ScheduledTime = item.ScheduledTime;
        inc.Cause = item.Cause;
        inc.SubCause = item.Subcause;
        inc.ConstructionType = item.ConstructionType;
        inc.Material = item.Material;

        lista.Add(inc);
        
      }

      return Ok(new { lista });
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Get(int id)
    {

      if (await authentification.Users.FirstOrDefaultAsync(x => x.Id == User.Claims.First(x => x.Type == "UserID").Value) != null)
      {
        Incident incident = await data.Incidents.FirstOrDefaultAsync(x => x.Id == id);
        if (incident != null)
        {
          return Ok();
        }else
        {
          return NotFound();
        }
      }else
      {
        return Unauthorized();
      }
    }
    

  }
}
