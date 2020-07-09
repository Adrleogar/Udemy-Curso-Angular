import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']


})
export class AppComponent {
  VisualizationOfDetails  =false;
  Log = [];

  ToggleDetails(){
    this.VisualizationOfDetails =!this.VisualizationOfDetails;
    this.Log.push(this.Log.length+1);

  }
}
