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
  //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
  public class ConsumerController : Controller
  {
    private readonly DataDBContext data;
    private readonly AuthenticationDBContext auth;
    private UserManager<User> manager;

    public ConsumerController(UserManager<User> u, DataDBContext d, AuthenticationDBContext a)
    {
      manager = u;
      data = d;
      auth = a;
    }

    [HttpGet]
    public IActionResult Get()
    {
      List<ConsumerDataDTO> lista = new List<ConsumerDataDTO>();
      foreach (Consumer item in data.Consumers)
      {
        lista.Add(new ConsumerDataDTO()
        {
          Name = item.Name,
          Surname = item.Surname,
          Phone = item.Phone,
          Type = item.Type,
          Street = item.Street.Name
        });
      }
      return Ok(new { lista });
    }


    [HttpPost]
    public async Task<IActionResult> Post([FromBody] ConsumerDataDTO body)
    {

      string id = User.Claims.First(x => x.Type == "UserID").Value;
      string role = auth.Users.FirstOrDefault(x => x.Id == id).Role;
      if (role == "Dispatcher")
      {
        Consumer temp = new Consumer()
        {
          Name = body.Name,
          Surname = body.Surname,
          Phone = body.Phone,
          Type = body.Type,
          Street = data.Streets.FirstOrDefault(x => x.Name == body.Street)
        };

        await data.Consumers.AddAsync(temp);
        await data.SaveChangesAsync();
        return Ok();
      }
      else
      {
        return Unauthorized();
      }


    }


    [HttpGet]
    [Route("GetConsumerIds")]
    public IActionResult GetConsumerIds()
    {
      List<int> lista = new List<int>();
      foreach (Consumer item in data.Consumers)
      {
        lista.Add(item.Id);
      }
      return Ok(new { lista });

    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
      foreach (var item in data.Consumers)
      {
        if (item.Id == id)
        {
          data.Entry(item).State = Microsoft.EntityFrameworkCore.EntityState.Deleted;

          break;
        }
      }
      await data.SaveChangesAsync();
      return Ok();
    }
  }
}
