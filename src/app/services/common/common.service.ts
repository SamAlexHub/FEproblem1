import { Injectable } from '@angular/core';
import { observable,BehaviorSubject} from 'rxjs';
import { ApiService } from '../apiservices/api.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(public apiservices: ApiService) { }
  

 

  private times = new BehaviorSubject('');
  newTime = this.times.asObservable();
  
  time;
  vechicles = [];
  timeArray = [];
  
  // api format

  body = {
    token:'',
    planet_names:[],
    vechicle_names:[]
  }

  setSendData(body) {
   this.body.token = localStorage.getItem('token');
   this.body.planet_names.push(body.planet_name);
   this.body.vechicle_names.push(body.vechicle_name);
  }
  

  // calculate total time
  setTime(time) {
   this.timeArray.push(time);
   this.calculateTotalTime();
  }

  calculateTotalTime() {
   this.time = this.timeArray.reduce((a,b) => a+b,0);
   this.times.next(this.time);
  }
 

}
