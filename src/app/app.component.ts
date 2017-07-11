import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Lab1';

  private ComponentCounterValue;

  constructor() {
    this.ComponentCounterValue = 1000;
    console.log("Samuel Test " + this.ComponentCounterValue);
  }

  public outputData;

  showOutputData(data){
    this.outputData = data;
    this.ComponentCounterValue = data;
  }

}
