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
  public class DevicesController : ControllerBase
  {
    private readonly DataDBContext data;



    public DevicesController(DataDBContext d)
    {
      data = d;
    }

    [HttpGet]
    public ICollection<DeviceDTO> Get()
    {
      List<DeviceDTO> listaUredjaja = new List<DeviceDTO>();
      foreach(Device item in data.Devices)
      {
        DeviceDTO device = new DeviceDTO();
        device.Type = item.Type;
        device.Name = item.Name;
        device.Street = item.Street.Name;
        listaUredjaja.Add(device);
      }

      return listaUredjaja;
    }

    [HttpPost]
    public async Task<IActionResult> Post([FromBody] DeviceDTO body)
    {
      Device device = new Device();
      device.Type = body.Type;
      device.Name = body.Name;
      device.Street = data.Streets.FirstOrDefault(x => x.Name == body.Street);

      data.Devices.Add(device);
      await data.SaveChangesAsync();
      return Ok();
    }


    [HttpGet]
    [Route("GetDeviceByName/{name}")]
    public IActionResult GetDeviceByName(string name)
    {
      Device device = data.Devices.FirstOrDefault(x => x.Name == name);

      if (device == null)
      {
        return BadRequest();
      }else
      {
        return Ok(new { povratnaVr = new DeviceDTO() { Type = device.Type, Name = device.Name, Street = device.Street.Name }});
      }
    }
  }
}
