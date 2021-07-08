using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApp.Models;
using WebApp.Models.NtoNClasses;

namespace WebApp.Repository
{
    public class DataDBContext:DbContext
    {
        public DataDBContext(DbContextOptions<DataDBContext> options): base(options)
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseLazyLoadingProxies();
        }

        public DbSet<Street> Streets { get; set; }
        public DbSet<Call> Calls { get; set; }
        public DbSet<Incident> Incidents { get; set; }
        public DbSet<WorkOrder> WorkOrders { get; set; }
        public DbSet<WorkPlan> WorkPlans { get; set; }
        public DbSet<SafetyDoc> SafetyDocs { get; set; }
        public DbSet<Device> Devices { get; set; }
        public DbSet<Crew> Crews { get; set; }
        public DbSet<Consumer> Consumers { get; set; }
        public DbSet<HistoricChange> HistoricChanges { get; set; }
        public DbSet<Instruction> Instructions { get; set; }
        public DbSet<Notification> Notifications { get; set; }
        public DbSet<IncidentDevice> IncidentsDevices { get; set; }
        public DbSet<SafetyDocDevice> SafetyDocsDevices { get; set; }
        public DbSet<WorkOrderDevice> WorkOrdersDevices { get; set; }
        public DbSet<WorkPlanDevice> WorkPlansDevices { get; set; }
    }
}
