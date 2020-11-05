import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FalconSearchPageComponent } from './falcon-search-page/falcon-search-page.component';
import { SuccesspageComponent } from './successpage/successpage.component';

const routes: Routes = [

  { path:'', component:FalconSearchPageComponent },
  { path:'success', component:SuccesspageComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
