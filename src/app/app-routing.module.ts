import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FalconSearchPageComponent } from './falcon-search-page/falcon-search-page.component';

const routes: Routes = [
  {
    path:'', component:FalconSearchPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
