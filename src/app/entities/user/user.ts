import { StatusType } from "./status-type.enum";
import { UserType } from "./user-type.enum";

export class User {
    id : number;
    userName : string;
    password : string;
    firstName : string;
    lastName : string;
    type : UserType;
    email : string;
    dateOfBirth : string;
    address : string;
    image : string;
    status : StatusType;


    constructor(id : number, un : string, pass : string, fn : string, ln : string, type : UserType, em : string, birth : string, addr : string,
         img : string, status : StatusType){
        this.id=id;
        this.userName=un;
        this.password = pass;
        this.firstName=fn;
        this.lastName = ln;
        this.type=type;
        this.email=em;
        this.dateOfBirth=birth;
        this.address=addr;
        this.image=img;
        this.status=status;
    }

    
}
