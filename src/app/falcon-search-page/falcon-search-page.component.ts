import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/apiservices/api.service';
import { Planets } from '../models/planets/planets';

@Component({
  selector: 'app-falcon-search-page',
  templateUrl: './falcon-search-page.component.html',
  styleUrls: ['./falcon-search-page.component.css']
})
export class FalconSearchPageComponent implements OnInit {

  constructor(public apiservices: ApiService) { }

  vechicles = [];
  const_vechicles = [];
  planets = [];
  token;




  selected_vechicle_distance = {
    destination_1: '',
    destination_2: '',
    destination_3: '',
    destination_4: ''
  }



  ngOnInit() {
    this.getToken();
    this.getPlanets();
    this.getVechiles();
  }


  getToken() {
    this.apiservices.getToken().subscribe((response: any) => {
      if (response) {
        this.token = response.token;
        console.log('token', this.token);
      }
    }, (err) => {
      console.log('api error', err);
    });
  }



  getPlanets() {
    this.apiservices.getPlanets().subscribe((response: any) => {
      if (response) {
        this.planets = response;
        console.log('planets', this.planets);
      }
    }, (err) => {
      console.log('api error response, get planets', err);
    });
  }


  getVechiles() {
    this.apiservices.getVechiles().subscribe((response: any) => {
      if (response) {
        this.vechicles = response;
        this.const_vechicles = response
        console.log('vechicles', this.vechicles);
      }
    }, (err) => {
      console.log('api error response ,vechicles', err)
    });
  }




}
