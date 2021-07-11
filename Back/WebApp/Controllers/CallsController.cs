using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
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
  public class CallsController : ControllerBase
  {

    private readonly DataDBContext data;
    private readonly AuthenticationDBContext authentication;
    private UserManager<User> manager;

    public CallsController(DataDBContext d, AuthenticationDBContext a, UserManager<User> u)
    {
      data = d;
      authentication = a;
      manager = u;
    }


    [HttpPost]
    [Route("GetCallsForDevices")]
    public IActionResult GetCallsForDevices(DeviceDTO[] body)
    {
      List<CallDTO> ret = new List<CallDTO>();
      List<string> adrs = new List<string>();
      foreach (DeviceDTO d in body)
      {
        if (!adrs.Contains(d.Street))
        {
          adrs.Add(d.Street);
        }
      }
      foreach (Call c in data.Calls)
      {
        if (adrs.Contains(c.Street.Name))
        {
          User temp = authentication.Users.FirstOrDefault(x => x.Id == c.UserID);
          string username = "Anonymous User";
          if (temp != null)
          {
            username = temp.FullName;
          }
          CallDTO call = new CallDTO();
          call.UserId = username;
          call.Comment = c.Comment;
          call.Hazard = c.Hazard;
          call.Reason = c.Reason;
          call.Street = c.Street.Name;

          ret.Add(call);
        }
      }
      return Ok(new { retval = ret });
    }

  }
}
