//declaration of all components

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { CreateDietPlanComponent } from './create-diet-plan/create-diet-plan.component';
import { ViewDietPlanComponent } from './view-diet-plan/view-diet-plan.component';
import { ViewStatisticsComponent } from './view-statistics/view-statistics.component';
import { FoodItemsComponent } from './food-items/food-items.component';
// import { BmiComponent } from './bmi/bmi.component';

import { CommonModule } from '@angular/common';


import '@angular/compiler';
import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgxGaugeModule } from 'ngx-gauge';
// import { AuthComponent } from './auth/auth.component'; //bubble chart


if ((window as any).ENABLE_PROD_MODE) {
    enableProdMode();
}

// bootstrapApplication(AppComponent); //commented

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    CreateDietPlanComponent,
    ViewDietPlanComponent,
    ViewStatisticsComponent,
    // AuthComponent,    
    // BmiComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FoodItemsComponent,
    NgxChartsModule,
    BrowserAnimationsModule,
    NgxGaugeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

