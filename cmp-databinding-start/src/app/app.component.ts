import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: "server", name: "TestServer", content: "testiiiing"}];

  onServerAdded(serverData:{serverName: String, serverContent: String}){
    this.serverElements.push({
    type: 'server',
    name: serverData.serverName.toString(),
    content: serverData.serverContent.toString()
    });
  }

  onBlueprintAdded(blueprintData:{serverName: String, serverContent: String}){
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName.toString(),
      content: blueprintData.serverContent.toString()
    });
  }
  onChangeFirst(){
    this.serverElements[0].name = 'changed';
  }
  onDestroyFirst(){
    this.serverElements.splice(0, 1);
  }
}
