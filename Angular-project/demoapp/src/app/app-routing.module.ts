import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/home/home.component'
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { CreateDietPlanComponent } from './create-diet-plan/create-diet-plan.component';
import { ViewDietPlanComponent } from './view-diet-plan/view-diet-plan.component';


const routes: Routes = [
  { path:'home', component:HomeComponent },
  { path:'login', component:LoginComponent },
  { path:'signup', component:SignupComponent },
  { path:'createDietPlan', component:CreateDietPlanComponent },
  { path: 'viewDietPlan', component:ViewDietPlanComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
