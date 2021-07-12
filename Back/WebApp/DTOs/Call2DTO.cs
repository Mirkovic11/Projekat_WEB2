using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApp.DTOs
{
  public class Call2DTO
  {
    private CallDTO call;

    public CallDTO Call
    {
      get { return call; }
      set { call = value; }
    }

    private string id;

    public string Id
    {
      get { return id; }
      set { id = value; }
    }

  }
}
