using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApp.DTOs
{
  public class SafetyDocDataDTO
  {
    [Required]
    private string type;

    public string Type
    {
      get { return type; }
      set { type = value; }
    }

    [Required]
    private int workPlanId;

    public int WorkPlanId
    {
      get { return workPlanId; }
      set { workPlanId = value; }
    }


    private string status;

    public string Status
    {
      get { return status; }
      set { status = value; }
    }

    [Required]
    private string details;

    public string Details
    {
      get { return details; }
      set { details = value; }
    }

    [Required]
    private string notes;

    public string Notes
    {
      get { return notes; }
      set { notes = value; }
    }

    private DateTime dateCreated;

    public DateTime DateCreated
    {
      get { return dateCreated; }
      set { dateCreated = value; }
    }

    private bool operationsCompleted;

    public bool OperationsCompleted
    {
      get { return operationsCompleted; }
      set { operationsCompleted = value; }
    }

    private bool tagsRemoved;

    public bool TagsRemoved
    {
      get { return tagsRemoved; }
      set { tagsRemoved = value; }
    }

    private bool groundingRemoved;

    public bool GroundingRemoved
    {
      get { return groundingRemoved; }
      set { groundingRemoved = value; }
    }

    private bool ready;

    public bool Ready
    {
      get { return ready; }
      set { ready = value; }
    }

  }
}
