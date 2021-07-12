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


    [HttpPost]
    [Route("EditProfile")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public async Task<IActionResult> EditProfile(EditProfileDTO model)
    {
      string id = User.Claims.First(x => x.Type == "UserID").Value;
      User temp = await manager.FindByIdAsync(id);
      temp.FullName = model.body.FullName;
      temp.UserName = model.body.Username;
      temp.Role = model.body.Role;
      temp.Email = model.body.Email;
      temp.CrewID = model.body.CrewID;
      temp.StreetID = (await data.Streets.FirstOrDefaultAsync(x => x.Name == model.body.Street)).Id;
      temp.DOB = model.body.DOB;
      await manager.UpdateAsync(temp);
      if (!string.IsNullOrWhiteSpace(model.body.Password))
      {
        if ((await manager.ChangePasswordAsync(temp, model.currentPassword, model.body.Password)).Succeeded)
        {
          return Ok(new { msg = "changedpass" });
        }
        else
        {
          return Ok(new { msg = "error" });
        }
      }
      return Ok(new { msg = "ok" });
    }

    [HttpGet]
    [Route("GetProfile")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public async Task<IActionResult> GetProfile()
    {
      User temp = await manager.FindByIdAsync(User.Claims.First(x => x.Type == "UserID").Value);
      UserDTO retval = new UserDTO()
      {
        FullName = temp.FullName,
        Username = temp.UserName,
        Role = temp.Role,
        Email = temp.Email,
        CrewID = temp.CrewID,
        Street = (await data.Streets.FirstOrDefaultAsync(x => x.Id == temp.StreetID)).Name,
        DOB = temp.DOB,

      };
      return Ok(new { retval });
    }

    //[HttpGet]
    //[Route("UserInfo")]
    //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    //public async Task<IActionResult>


    [HttpGet]
    [Route("GetAllUsers")]
    public async Task<ICollection<UserDTO>> GetAllUsers()
    {
      List<UserDTO> lista = new List<UserDTO>();
      foreach (User item in authentication.Users)
      {
        UserDTO user = new UserDTO();
        user.FullName = item.FullName;
        user.Username = item.UserName;
        user.Street = (await data.Streets.FirstOrDefaultAsync(x => x.Id == item.StreetID)).Name;


        lista.Add(user);
      }

      return lista;
    }

    [HttpGet]
    [Route("GetUserByName/{name}")]
    public async Task<UserDTO> GetUserByName(string name)
    {
      User user = authentication.Users.FirstOrDefault(x => x.UserName == name);
      if (user == null)
      {
        return null;
      }
      else
      {
        UserDTO povratnaVr = new UserDTO();
        povratnaVr.Username = user.UserName;
        povratnaVr.FullName = user.FullName;
        povratnaVr.Street = (await data.Streets.FirstOrDefaultAsync(x => x.Id == user.StreetID)).Name;


        return povratnaVr;
      }
    }
  }
}
