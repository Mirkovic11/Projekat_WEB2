using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApp.DTOs
{
  public class DeviceDTO
  {
    [Required]
    private string type;

    public string Type
    {
      get { return type; }
      set { type = value; }
    }

    private string name;

    public string Name
    {
      get { return name; }
      set { name = value; }
    }

    [Required]
    private string street;

    public string Street
    {
      get { return street; }
      set { street = value; }
    }

  }
}
