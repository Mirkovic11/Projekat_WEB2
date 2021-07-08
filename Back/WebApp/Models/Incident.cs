using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using WebApp.Models.NtoNClasses;

namespace WebApp.Models
{
    public class Incident
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Type { get; set; }
        public bool Confirmed { get; set; }
        public string Status { get; set; }
        public DateTime ETA { get; set; }
        public DateTime ATA { get; set; }
        public DateTime ETR { get; set; }
        public int AffectedCustomers { get; set; }
        public double Voltage { get; set; }
        public DateTime ScheduledTime { get; set; }
        public string Cause { get; set; }
        public string Subcause { get; set; }
        public string ConstructionType { get; set; }
        public string Material { get; set; }
        //dodeli sebi na resavanje, mozda polje kom useru je dodeljeno; broj poziva? vidi se lepo u calls tabu idk, multimedia attachment?
        //public virtual ICollection<Call> Calls { get; set; }
        public virtual ICollection<IncidentDevice> Devices { get; set; }
        public virtual ICollection<WorkOrder> WorkOrders { get; set; }
        public virtual Crew Crew { get; set; }
    }
}
