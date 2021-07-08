using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApp.Models
{
    public class Call
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Reason { get; set; }
        public string Comment { get; set; }
        public string Hazard { get; set; }
        public virtual Street Street { get; set; } // iz ulice se dobija prioritet
        public string UserID { get; set; }
    }
}
