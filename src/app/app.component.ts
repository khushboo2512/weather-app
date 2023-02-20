
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'WeatherApp';
  weatherData: any;
  initCity ="Amsterdam";

  constructor() {  } 
 
}
