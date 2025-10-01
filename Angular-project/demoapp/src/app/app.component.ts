import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemoserviceService } from './demoservice.service';
import { Observable, Subject } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // standalone:true,
})
export class AppComponent implements OnInit{
  
 constructor(private router:Router){

 }
 ngOnInit(): void {
   this.router.navigateByUrl("/login");
 }
}
