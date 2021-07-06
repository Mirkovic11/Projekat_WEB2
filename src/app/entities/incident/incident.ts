export class Incident {
    id: string;
    type: string;
    priority: number;
    confirmed: boolean;
    status: string;
    eta: Date;
    ata: Date;
    incidentTime: Date;
    etr: Date;
    affectedCustomers: number;
    calls:number;
    voltage:number;
    scheduledTime:Date;
    address:string;
    cause:string;
    subCause:string;
    construction:string;
    material:string;


    constructor(id:string, t:string, prior:number, conf:boolean, stat:string, eta:Date, ata:Date, incTime:Date, etr:Date, affec:number, calls:number, voltage:number, schTime:Date, addr:string, caus:string, subCaus:string, constr:string, mat:string){
        this.id=id;
        this.type=t;
        this.priority=prior;
        this.confirmed=conf;
        this.status=stat;
        this.eta=eta;
        this.ata=ata;
        this.incidentTime=incTime;
        this.etr=etr;
        this.affectedCustomers=affec;
        this.calls=calls;
        this.voltage=voltage;
        this.scheduledTime=schTime;
        this.address=addr;
        this.cause=caus;
        this.subCause=subCaus;
        this.construction=constr;
        this.material=mat;
    }
}
