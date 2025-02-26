import { Component } from "@angular/core";

@Component({
    selector:'app-server',
    standalone:false,
    templateUrl: './server.component.html',
    styles:[`
    .online{
        color:white;
    }`]
})
export class serverComponent{
    serverId:number= 10;
    serverStatus:string = "offline"

    constructor(){
        this.serverStatus = Math.random() > 0.5 ?'online':'offline';
    }

    getServerStatus(){
        return this.serverStatus;
    }

    getColor(){
        return this.serverStatus === 'online'?'green':'red';
    }
}