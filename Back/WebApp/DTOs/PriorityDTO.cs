using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApp.DTOs
{
  public class PriorityDTO
  {
    private string street;

    public string Street
    {
      get { return street; }
      set { street = value; }
    }

    private int priority;

    public int Priority
    {
      get { return priority; }
      set { priority = value; }
    }

  }
}
