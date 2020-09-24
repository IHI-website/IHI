import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { CustomersComponent } from './components/customers/customers.component';
import { ServicesComponent } from './components/services/services.component';
import { ConectionComponent } from './components/conection/conection.component';
import { HomeComponent } from './components/home/home.component';
import { RecommendationComponent } from './components/recommendation/recommendation.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    AboutComponent,
    CustomersComponent,
    ServicesComponent,
    ConectionComponent,
    HomeComponent,
    RecommendationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
