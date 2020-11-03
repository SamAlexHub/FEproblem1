import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/apiservices/api.service';
import { Planets } from '../models/planets/planets';

@Component({
  selector: 'app-destination-one',
  templateUrl: './destination-one.component.html',
  styleUrls: ['./destination-one.component.css']
})
export class DestinationOneComponent implements OnInit {

  constructor(public apiservices: ApiService) { }

  planets = [];

  planets_names: Planets = {

    destination_1: '',
    destination_2: '',
    destination_3: '',
    destination_4: ''
  }

  ngOnInit() {
    this.getPlanets();
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

  destination1(val) {
    console.log('change value',val);
    
  }


}
