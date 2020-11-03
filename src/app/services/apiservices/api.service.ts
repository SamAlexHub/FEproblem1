import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getHostURL() {
    if (window.location.hostname == 'localhost') {
      return "https://findfalcone.herokuapp.com/"
    }
     else {  
      return "https://findfalcone.herokuapp.com/"
    }
  }

  getToken()  {
    let url = this.getHostURL() + 'token'
    let httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',    
      })
    };
    return this.http.post(url,'', httpOptions);
  }

  getPlanets()  {
    let url = this.getHostURL() + 'planets' 
    return this.http.get(url);
  }

  getVechiles() {
    let url = this.getHostURL() + 'vehicles' 
    return this.http.get(url);
  }

}
