import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WeatherService {
  constructor(private http: HttpClient) { }
  //baseUrl: string = 'http://localhost:8080/user-portal/users';

  getWeather(city: any) {
   // return this.http.get<User[]>(this.baseUrl);
    return this.http.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=ffb75a3c96eeaa7ac2e866e8de1d6b7c`);
  }

//   getUserById(id: number) {
//     return this.http.get<User>(this.baseUrl + '/' + id);
//   }

//   createUser(user: User) {
//     return this.http.post(this.baseUrl, user);
//   }

//   updateUser(user: User) {
//     return this.http.put(this.baseUrl + '/' + user.id, user);
//   }

//   deleteUser(id: number) {
//     return this.http.delete(this.baseUrl + '/' + id);
//   }
}