using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApp.Models
{
    public class Notification
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Type { get; set; }
        public bool Seen { get; set; }
        public string Description { get; set; }
        public int TargetID { get; set; }
        public string TargetType { get; set; }
        public DateTime Timestamp { get; set; }
    }
}
