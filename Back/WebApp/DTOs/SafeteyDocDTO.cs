using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApp.DTOs
{
  public class SafeteyDocDTO
  {
    private SafetyDocDataDTO safetyDoc;

    public SafetyDocDataDTO SafetyDoc
    {
      get { return safetyDoc; }
      set { safetyDoc = value; }
    }

    private DeviceDTO[] devices;

    public DeviceDTO[] Devices
    {
      get { return devices; }
      set { devices = value; }
    }


    private string id;

    public string Id
    {
      get { return id; }
      set { id = value; }
    }

    private string role;

    public string Role
    {
      get { return role; }
      set { role = value; }
    }

  }
}
