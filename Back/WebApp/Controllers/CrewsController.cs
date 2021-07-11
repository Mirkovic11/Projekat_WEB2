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
  public class CrewsController : ControllerBase
  {

    private readonly DataDBContext data;
    private readonly AuthenticationDBContext authentication;
    private UserManager<User> manager;

    public CrewsController(DataDBContext d, AuthenticationDBContext a, UserManager<User> u)
    {
      data = d;
      authentication = a;
      manager = u;
    }

    [HttpGet]
    public IActionResult Get()
    {
      List<CrewDTO> lista = new List<CrewDTO>();
      foreach(Crew item in data.Crews)
      {
        CrewDTO crew = new CrewDTO();
        crew.Id = item.Id;
        crew.Name = item.Name;

        lista.Add(crew);
      }

      return Ok(new {lista});
    }
  }
}
