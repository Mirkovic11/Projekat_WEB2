using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApp.DTOs
{
  public class IncidentDataDTO
  {
    [Required]
    private string type;

    public string Type
    {
      get { return type; }
      set { type = value; }
    }

    private bool confirmed;

    public bool Confirmed
    {
      get { return confirmed; }
      set { confirmed = value; }
    }


    private string status;

    public string Status
    {
      get { return status; }
      set { status = value; }
    }

    [Required]
    private DateTime eta;

    public DateTime ETA
    {
      get { return eta; }
      set { eta = value; }
    }


    private DateTime ata;

    public DateTime ATA
    {
      get { return ata; }
      set { ata = value; }
    }

    [Required]
    private DateTime etr;

    public DateTime ETR
    {
      get { return etr; }
      set { etr = value; }
    }


    private int affectedCustomers;

    public int AffectedCustomers
    {
      get { return affectedCustomers; }
      set { affectedCustomers = value; }
    }

    [Required]
    private double voltage;

    public double Voltage
    {
      get { return voltage; }
      set { voltage = value; }
    }

    [Required]
    private DateTime scheduledTime;

    public DateTime ScheduledTime
    {
      get { return scheduledTime; }
      set { scheduledTime = value; }
    }

    [Required]
    private string cause;

    public string Cause
    {
      get { return cause; }
      set { cause = value; }
    }


    [Required]
    private string subCause;

    public string SubCause
    {
      get { return subCause; }
      set { subCause = value; }
    }

    private string constructionType;

    public string ConstructionType
    {
      get { return constructionType; }
      set { constructionType = value; }
    }

    [Required]
    private string material;

    public string Material
    {
      get { return material; }
      set { material = value; }
    }

  }
}
