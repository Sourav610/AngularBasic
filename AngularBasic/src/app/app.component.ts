import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone:false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  allowNewServer = false;
  serverCreationStatus = "No server was created";
  serverName = 'Testserver';
  constructor(){
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000)
  }

  onCreateServer(){
    this.serverCreationStatus = "Server was created! Name is "+this.serverName;
  }

  onUpdateServerName(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
