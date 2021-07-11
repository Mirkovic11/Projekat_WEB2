export class RegisteredUser {
    username:string;
    email:string;
    password:string;
    fullName:string;
    DOB:Date;
    street:string;
    role:string;
    crewID:number;

    constructor(u:string, e:string, p:string, fn:string, dob:Date, s:string, r:string, cid:number){
        this.username=u;
        this.email=e;
        this.password=p;
        this.fullName=fn;
        this.DOB=dob;
        this.street=s;
        this.role=r;
        this.crewID=cid;

    }
}