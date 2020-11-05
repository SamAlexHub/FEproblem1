import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FalconSearchPageComponent } from './falcon-search-page/falcon-search-page.component';
import { DestinationOneComponent } from './destination-one/destination-one.component';
import { DestinationTwoComponent } from './destination-two/destination-two.component';
import { DestinationThreeComponent } from './destination-three/destination-three.component';
import { DestinationFourComponent } from './destination-four/destination-four.component';
import { SuccesspageComponent } from './successpage/successpage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    FalconSearchPageComponent,
    DestinationOneComponent,
    DestinationTwoComponent,
    DestinationThreeComponent,
    DestinationFourComponent,
    SuccesspageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
