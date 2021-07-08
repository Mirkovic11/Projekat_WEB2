using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using WebApp.Models.NtoNClasses;

namespace WebApp.Models
{
    public class Device
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Type { get; set; }
        public string Name { get; set; } // PRE1 kao prekidac 1, mozda mora da se negde pamti static broj svakog tipa, ili da se cuva u bazi u posebnoj tabelici
        public virtual Street Street { get; set; }//max devices po ulici je 100
        public double CoordX { get; set; }
        public double CoordY { get; set; }
        public virtual ICollection<IncidentDevice> Incidents { get; set; }
        public virtual ICollection<WorkOrderDevice> WorkOrders { get; set; }
        public virtual ICollection<WorkPlanDevice> WorkPlans { get; set; } // medju klase za ova 2 i te 2 klase i done sa docs
        public virtual ICollection<SafetyDocDevice> SafetyDocs { get; set; }
        public virtual ICollection<Instruction> Instructions { get; set; }
    }
}
