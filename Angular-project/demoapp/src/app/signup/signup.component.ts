import { Component, OnInit } from '@angular/core';
import { DemoserviceService } from '../demoservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
 

  constructor(private dataSrc:DemoserviceService, private router:Router){}

  ngOnInit(): void {
    
  }

  username:any;
  password:any;
  firstname:any;
  lastname:any;
  datalogin:any;

  postUserRegistration(){
    let data = { 
      
      username:this.username,
      password:this.password,
      firstname:this.firstname,
      lastname:this.lastname
    }
    if(data.username && data.password && data.firstname && data.lastname){
      this.dataSrc.postRegister(data).subscribe((x)=>{console.log(x)});
      
    }
    else{
      alert("Incorrect details");
    }
  
}
}