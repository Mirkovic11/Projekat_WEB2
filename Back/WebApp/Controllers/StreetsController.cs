using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApp.DTOs;
using WebApp.Models;
using WebApp.Repository;

namespace WebApp.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class StreetsController : ControllerBase
  {
    private readonly DataDBContext data;
    private readonly AuthenticationDBContext authentication;
    private UserManager<User> manager;

    public StreetsController(DataDBContext d, AuthenticationDBContext a, UserManager<User> u)
    {
      data = d;
      authentication = a;
      manager = u;
    }
    
        [HttpGet]
        public IActionResult Get()
        {
          List<StreetDTO> lista = new List<StreetDTO>();
          foreach(Street item in data.Streets)
          {
            StreetDTO s = new StreetDTO();
            s.Id = item.Id;
            s.Priority = item.Priority;
            s.Name = item.Name;

            lista.Add(s);
          }

          return Ok(new { lista });
        }

        [HttpGet("{id}")]
        public string Get(int id)
        {
          return "value";
        }

        [HttpPost]
        [Route("SetPriority")]
        public async Task<IActionResult> SetPriority([FromBody] PriorityDTO body)
        {
          foreach (Street item in data.Streets)
          {
            if (item.Name == body.Street)
            {
              item.Priority = body.Priority;
              data.Entry(item).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
              break;
            }
          }

          await data.SaveChangesAsync();
          return Ok();
        }
   

    [HttpPost]
    [Route("GetPriority")]
    public IActionResult GetPriority(DeviceDTO[] body)
    {
      List<string> lista = new List<string>();
      foreach(DeviceDTO item in body)
      {

          if (!lista.Contains(item.Street))
          {
            lista.Add(item.Street);
          }
      }

      int prioritet = 0;
      foreach(Street item in data.Streets)
      {
        foreach(string s in lista)
        {
          if (s == item.Name && item.Priority > prioritet)
          {
            prioritet = item.Priority;
          }
          
        }
      }
      return Ok(new { prioritet });
    }


    [HttpGet]
    [Route("GetPriorityForCall/{street}")]
    public IActionResult GetPriorityForCall(string street)
    {
      int prioritet = 0;
      foreach (Street item in data.Streets)
      {
        if (item.Name == street && item.Priority > prioritet)
        {
          prioritet = item.Priority;
          break;
        }
      }

      return Ok(new { prioritet });
    }


    [HttpDelete("{id}")]
    public void Delete(int id)
    {
    }


  }
}
