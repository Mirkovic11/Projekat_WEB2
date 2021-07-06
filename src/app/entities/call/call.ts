export class Call {
    id:number;
    reason:string;
    comment:string;
    hazard:string;
    street:string;
    userId:string;

    constructor(id : number, reason: string, comm: string, haz:string, street:string, uID:string){
        this.id=id;
        this.reason=reason;
        this.comment=comm;
        this.hazard=haz;
        this.street=street;
        this.userId=uID;
    }
}
