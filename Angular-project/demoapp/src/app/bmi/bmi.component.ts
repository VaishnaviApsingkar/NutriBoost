import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {



  // saveBmiDetails(){
  //   let data={
  //     height:this.height,
  //     weight:this.weight,
  //     //userId:this.userId //to send id to backend 
  //   }
  //   if(data.height && data.weight){
  //     this.dataSrc.userProfileDetails(data).subscribe((x)=>{console.log(x)});
  //     //this.router.navigateByUrl("/");
  //     alert("Click on proceed to calculate BMI!");

  //   }
  //   else{
  //     alert("Enter all the details");
  //   }
  // }
}
