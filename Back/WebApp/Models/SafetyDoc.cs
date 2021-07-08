using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using WebApp.Models.NtoNClasses;

namespace WebApp.Models
{
    public class SafetyDoc
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Type { get; set; }
        public virtual WorkPlan WorkPlan { get; set; }
        public string Status { get; set; }
        public string UserID { get; set; }
        public string Details { get; set; }
        public string Notes { get; set; }
        public DateTime DateCreated { get; set; }
        public bool OperationsCompleted { get; set; }
        public bool TagsRemoved { get; set; }
        public bool GroundingRemoved { get; set; }
        public bool Ready { get; set; }
        public virtual ICollection<SafetyDocDevice> Devices { get; set; }
        public virtual ICollection<HistoricChange> History { get; set; }
    }
}
