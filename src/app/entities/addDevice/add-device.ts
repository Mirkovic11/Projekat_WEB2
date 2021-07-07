import { StringWriter } from "igniteui-angular-core";

export class AddDevice {
    incidentId:string;
    deviceId:string;

    constructor(incId:string, devId:string){
        this.incidentId=incId;
        this.deviceId=devId;
    }
}
