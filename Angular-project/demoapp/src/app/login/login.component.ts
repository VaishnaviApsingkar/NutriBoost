import { Component, OnInit , Input} from '@angular/core';
import { DemoserviceService } from '../demoservice.service';
import { Router } from '@angular/router';
import { GlobaldataService } from '../globaldata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  constructor(private dataSrc:DemoserviceService, private router:Router, private globalid:GlobaldataService){}

  ngOnInit(): void {
    
  }

  username:any;
  password:any;
  firstname:any;
  lastname:any;
  datalogin:any;

  gender:any;
  age: any;
  weight: any;
  height: any;
  exercise: any;


  title = 'nutrition demoapp';
  
  loginPage:boolean = true;
  loginComponent = true;

  switchTab(){
    this.loginPage = !this.loginPage;
  }
 
 /* 
  switchTab2(){
    this.loginPage = true;
  }
 */
 
  postCheckLogin(){
    let data = { 
      username:this.username,
      password:this.password

    }

    console.log('Success');

    if(data.username && data.password){
      this.dataSrc.postCheckLogin(data).subscribe((x:any)=>
      {
        
      if(x.key == 'Success'){
        console.log(x);
        this.globalid.setUserId(x.value); 
        this.router.navigateByUrl("/home");
        
      }
      else{
        alert("Invalid login. Enter correct details.")
      }
    });
    }
    else{
      alert("Incorrect details");
    }
    
  }
  
  // navigateToHome(){
  //   this.loginPage=true;
  // }

  // login_successful_home(){
  //   this.postCheckLogin();
  //   this.navigateToHome();

  //   const loginSuccessful = true;

  //   if (loginSuccessful) {
  //     // If login is successful, navigate to the homepage
  //     this.router.navigate(['/home']);
  //   } 
  //   else {
  //     console.log('Login Failed!!! Enter the correct details.');      
  //   }
  // }

}
