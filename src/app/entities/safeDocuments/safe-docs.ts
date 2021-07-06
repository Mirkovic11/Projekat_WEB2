import { DocumentType } from "./document-type.enum";

export class SafeDocs {

    type : String;
    workPlanId: number;
    status: string;
    details : string;
    notes : string;
    dateCreated : Date;
    operationsCompleted : boolean;
    tagsRemoved: boolean;
    groundingRemoved : boolean;
    ready : boolean;

    constructor(type : string, wpID: number, status: string, details : string, notes: string, date : Date, operations: boolean, tags: boolean, grounding : boolean, ready: boolean){

        this.type=type;
        this.workPlanId=wpID;
        this.status=status;
        this.details=details;
        this.notes=notes;
        this.dateCreated=date;
        this.operationsCompleted=operations;
        this.tagsRemoved=tags;
        this.groundingRemoved=grounding;
        this.ready=ready;
    }
}
