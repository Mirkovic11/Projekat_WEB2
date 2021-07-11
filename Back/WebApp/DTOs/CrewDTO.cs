using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApp.DTOs
{
  public class CrewDTO
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

    private List<string> list;

    public List<string> List
    {
      get { return list; }
      set { list = value; }
    }

  }
}
