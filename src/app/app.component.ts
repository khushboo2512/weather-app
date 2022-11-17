import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WeatherApp';
  weatherData: any;

  constructor(private readonly httpClient: HttpClient) {
  }

  loadWeather(event: any) {
    const city = event.target.value;

    this.httpClient.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=ffb75a3c96eeaa7ac2e866e8de1d6b7c`
    ).subscribe(
      (success) => {
        this.weatherData = success;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
