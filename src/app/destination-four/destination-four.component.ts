import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/apiservices/api.service';
import { Planets } from '../models/planets/planets';
import { CommonService } from '../services/common/common.service';

@Component({
  selector: 'app-destination-four',
  templateUrl: './destination-four.component.html',
  styleUrls: ['./destination-four.component.css']
})
export class DestinationFourComponent implements OnInit {

  constructor(public apiservices: ApiService,public common:CommonService) { }

  planets = [];
  vechicles = [];
  token;

  assign = false;
  assign_message = '';
  radioSelected_one;
  planet_distance;
  time;
  
  planets_names: Planets = {

    dest_1: '',
    dest_2: '',
    dest_3: '',
    dest_4: ''
  }

  vechile_name = {
    one:'',
    two:'',
    three:'',
    four:''
  }


  body = {
    planet_name:null,
    vechicle_name:null
  }

  ngOnInit() {
    this.getPlanets();
    this.getVechiles();
  }



  getPlanets() {
    this.apiservices.getPlanets().subscribe((response: any) => {
      if (response) {
        this.planets = response;
      }
    }, (err) => {
      console.log('api error response, get planets', err);
    });
  }


  getVechiles() {
    this.apiservices.getVechiles().subscribe((response: any) => {
      if (response) {
        this.vechicles = response;
      }
    }, (err) => {
      console.log('api error response ,vechicles', err)
    });
  }

 

  getDistance(distance)  { 
   for(let i =0 ;i <this.planets.length ;i ++)  {
     this. planet_distance  = this.planets.filter((data:any) => {
       return data.name == distance;
     })
   }
  }

  // get vechicles data
  setVechicleFour(data) {
    this.checkDistance(data);
    // this.setTime(data);
  }
  
  // calculate each one time and saved to common service
  setTime(data) {
    this.time = data.max_distance / data.speed;
    this.common.setTime(this.time);  
  }
  
  // check distance
  checkDistance(data)  {
    
    this.radioSelected_one = data.name;
  

    if(this.planet_distance[0].distance > data.max_distance) {
      this.assign = true;
      this.assign_message = "You Canot Choose This Ship! It Canot cover the Distance"
    } else {
      this.assign = false;
      this.body.planet_name = this.planets_names.dest_4;
      this.body.vechicle_name = this.vechile_name.four;
      this.setTime(data);
      this.common.setSendData(this.body)
      
    }
  }


}
