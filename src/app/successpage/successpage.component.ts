import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-successpage',
  templateUrl: './successpage.component.html',
  styleUrls: ['./successpage.component.css']
})
export class SuccesspageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  planetFound;

  getfalcon() {
  if(localStorage.getItem('planetfound')) {
   this.planetFound = localStorage.getItem('planetfound');
  }
  }

}
