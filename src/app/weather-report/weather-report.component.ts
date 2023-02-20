import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.scss']
})
export class WeatherReportComponent implements OnInit {

  weatherData: any;
  initCity ="Amsterdam";
  constructor(private weatherService: WeatherService) {
  }

  ngOnInit() {
    this.loadWeather();   
  }
  loadWeather(event?: any) {
    let city;
    if(event){
     city = event.target.value;
    } else {
      city = this.initCity;
    }
    this.weatherService.getWeather(city).subscribe(
      (success:any): void => {
        this.weatherData = success;   
        console.log("dataaa---->>>",this.weatherData);   
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
