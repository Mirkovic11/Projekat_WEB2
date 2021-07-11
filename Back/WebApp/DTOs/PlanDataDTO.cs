using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApp.DTOs
{
  public class PlanDataDTO
  {
    [Required]
    public string Type { get; set; }

    public string Status { get; set; }
    [Required]
    public int WorkOrderId { get; set; }
    [Required]
    public DateTime StartTime { get; set; }
    [Required]
    public DateTime EndTime { get; set; }
    [Required]
    public string Purpose { get; set; }
    [Required]
    public string Notes { get; set; }
    [Required]
    public string Company { get; set; }

    public DateTime DateCreated { get; set; }
  }
}
