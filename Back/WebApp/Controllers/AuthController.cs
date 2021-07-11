using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Google;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using WebApp.DTOs;
using WebApp.Models;
using WebApp.Repository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using System.Net;

namespace WebApp.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class AuthController : ControllerBase
  {
    private readonly DataDBContext data;
    private readonly AuthenticationDBContext authentication;
    private UserManager<User> manager;


    public AuthController(DataDBContext d, AuthenticationDBContext a, UserManager<User> m)
    {
      data = d;
      authentication = a;
      manager = m;
    }


    [HttpPost]
    [Route("Register")]
    public async Task<Object> Post([FromBody] UserDTO body)
    {
      User user = new User();
      user.UserName = body.Username;
      user.Email = body.Email;
      user.FullName = body.FullName;
      user.DOB = body.DOB;
      user.Role = body.Role;
      user.CrewID = body.CrewID;
      user.StreetID = (await data.Streets.FirstOrDefaultAsync(x => x.Name == body.Street)).Id;

      try
      {
        var rezultat= await manager.CreateAsync(user, body.Password); ;
        if (rezultat.Errors.Any())
        {
          var test = rezultat.Errors.ToList();
          return BadRequest(new { message = test[0].Description });
        }else
        {
          return Ok();
        }
        
      }catch (Exception e)
      {
        throw e;
      }
    }


    [HttpPost]
    [Route("Login")]
    public async Task<IActionResult> Login([FromBody] LogInUserDTO body)
    {
      User user = await manager.FindByNameAsync(body.Username);
      if (user != null && await manager.CheckPasswordAsync(user, body.Password))
      {
        var tokenDescriptor = new SecurityTokenDescriptor
        {
          Subject = new ClaimsIdentity(new Claim[]
            {
              new Claim("UserID", user.Id.ToString()),
              new Claim("Role", user.Role),
            }),
          Expires = DateTime.UtcNow.AddDays(1)
        };
        var tokenHandler = new JwtSecurityTokenHandler();
        var securityToken = tokenHandler.CreateToken(tokenDescriptor);
        var token = tokenHandler.WriteToken(securityToken);
        return Ok(new { token, role = user.Role, name = user.FullName, userId = user.Id.ToString() });
      }
      else
        return BadRequest(new { message = "Username or password is incorrect." });
    }



  }
}
