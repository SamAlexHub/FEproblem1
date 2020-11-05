import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/apiservices/api.service';
import { Planets } from '../models/planets/planets';
import { CommonService } from '../services/common/common.service';

@Component({
  selector: 'app-destination-two',
  templateUrl: './destination-two.component.html',
  styleUrls: ['./destination-two.component.css']
})
export class DestinationTwoComponent implements OnInit {

  constructor(public apiservices: ApiService,public common:CommonService) { }

  planets = [];
  vechicles = [];
  assign = false;
  planet_total;
  assign_message;
  token;

  planets_names: Planets = {

    dest_1: '',
    dest_2: '',
    dest_3: '',
    dest_4: ''
  }

  vechile_name2 = {
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

  planet_distance;
  radioSelected_one;
  time;

  getDistance(distance)  { 
   for(let i =0 ;i <this.planets.length ;i ++)  {
     this. planet_distance  = this.planets.filter((data:any) => {
       return data.name == distance;
     })
   }
  }

  setVechicleTwo(data) {
    this.checkDistance(data.name,data.max_distance);
    this.setTime(data);
   }

   setTime(data) {
    this.time = data.max_distance / data.speed;
    this.common.setTime(this.time);
  }

   checkDistance(name,v)  {
     
    this.radioSelected_one = name;
    this.vechile_name2.two = name;

    if(this.planet_distance[0].distance > v) {
      this.assign = true;
      this.assign_message = "You Canot Choose This Ship! It Canot cover the Distance"
    } else {
      this.assign = false;
      this.body.planet_name = this.planets_names.dest_2;
      this.body.vechicle_name = this.vechile_name2.two;
      this.common.setSendData(this.body);    
    }
  }
  

}
