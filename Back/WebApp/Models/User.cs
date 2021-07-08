using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApp.Models
{
    public class User:IdentityUser
    {
        public User(string username, string pass, string fullName, DateTime dOB, string role, int streetID, int crewID, string email)
        {
            UserName = username;
            PasswordHash = pass;
            FullName = fullName;
            DOB = dOB;
            Role = role;
            StreetID = streetID;
            CrewID = crewID;
            Email = email;
        }

        public User()
        {

        }

        public string FullName { get; set; }
        public DateTime DOB { get; set; }
        public string Role { get; set; }
        public int StreetID { get; set; }
        public int CrewID { get; set; }
    }
}
