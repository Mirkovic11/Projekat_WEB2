using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApp.DTOs
{
  public class UserDTO
  {
    [Required]
    private string username;

    public string Username
    {
      get { return username; }
      set { username = value; }
    }

    [Required]
    private string email;

    public string Email
    {
      get { return email; }
      set { email = value; }
    }

    [Required]
    private string password;

    public string Password
    {
      get { return password; }
      set { password = value; }
    }

    [Required]
    private string fullName;

    public string FullName
    {
      get { return fullName; }
      set { fullName = value; }
    }

    private DateTime dob;

    public DateTime DOB
    {
      get { return dob; }
      set { dob = value; }
    }

    [Required]
    private string street;

    public string Street
    {
      get { return street; }
      set { street = value; }
    }

    private string role;

    public string Role
    {
      get { return role; }
      set { role = value; }
    }


    private int crewID;

    public int CrewID
    {
      get { return crewID; }
      set { crewID = value; }
    }


  }
}
