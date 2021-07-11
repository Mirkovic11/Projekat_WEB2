using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApp.DTOs
{
  public class CallDTO
  {
    [Required]
    private string reason;

    public string Reason
    {
      get { return reason; }
      set { reason = value; }
    }

    [Required]
    private string comment;

    public string Comment
    {
      get { return comment; }
      set { comment = value; }
    }

    [Required]
    private string hazard;

    public string Hazard
    {
      get { return hazard; }
      set { hazard = value; }
    }

    [Required]
    private string street;

    public string Street
    {
      get { return street; }
      set { street = value; }
    }

    private string userId;

    public string UserId
    {
      get { return userId; }
      set { userId = value; }
    }


  }
}
