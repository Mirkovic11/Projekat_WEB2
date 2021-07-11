using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApp.DTOs
{
  public class StreetDTO
  {
    private int id;

    public int Id
    {
      get { return id; }
      set { id = value; }
    }

    private string name;

    public string Name
    {
      get { return name; }
      set { name = value; }
    }

    private int priority;

    public int Priority
    {
      get { return priority; }
      set { priority = value; }
    }

  }
}
