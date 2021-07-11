export class WorkPlans {

    type:string
    status:string
    workOrderId:number
    startTime:Date    
    endTime:Date
    purpose:string
    notes:string
    company:string
    dateCreated: Date

    /**
     *
     */
    constructor( type:string,
        status:string,
        workOrderId:number,
        startTime:Date,    
        endTime:Date,
        purpose:string,
        notes:string,
        company:string,
        dateCreated: Date) {

            this.company = company;
            this.dateCreated = dateCreated;
            this.endTime = endTime;
            this.notes = notes;
            this.purpose = purpose;
            this.startTime = startTime;
            this.status = status;
            this.type = type;
            this.workOrderId = workOrderId;
        
        
    }
}
