import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/apiservices/api.service';
import { CommonService } from '../services/common/common.service';

@Component({
  selector: 'app-falcon-search-page',
  templateUrl: './falcon-search-page.component.html',
  styleUrls: ['./falcon-search-page.component.css']
})
export class FalconSearchPageComponent implements OnInit {

  constructor(public apiservices: ApiService, public common: CommonService,private router:Router) { }


  token;
  error;
  time;


  ngOnInit() {
  this.getToken();
  this.getTotalTime();
 
  }

  getToken() {
    this.apiservices.getToken().subscribe((response: any) => {
      if (response) {
        this.token = response.token;
        localStorage.setItem('token',this.token);
      }
    }, (err) => {
    });
  }



  findFalcon() {
    let data = this.common.body;
    this.getfalcon(data);
  }

  getfalcon(body) {
    this.apiservices.findFalcons(body).subscribe((res: any) => {
      if (res.status == 'success') {
         localStorage.setItem('planetfound',res.planet_name);
         this.router.navigate(['success']);    
      }
    }, (err) => {
      this.error = err.error.error;
      
    })
  }


getTotalTime()  {
  this.common.newTime.subscribe((time:any) =>{
    this.time = time;
  })
}







}
