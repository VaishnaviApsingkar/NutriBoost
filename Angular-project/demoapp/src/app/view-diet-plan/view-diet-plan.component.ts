import { Component, OnInit } from '@angular/core';
import { GlobaldataService } from '../globaldata.service';
import { DemoserviceService } from '../demoservice.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-view-diet-plan',
  templateUrl: './view-diet-plan.component.html',
  styleUrls: ['./view-diet-plan.component.css']
})
export class ViewDietPlanComponent implements OnInit{

  fId:any;
  userId:any;
  food:any=[];

  searchKeyword: String=''; //global search


  constructor (private dataSrc:DemoserviceService, private router:Router, private globalid:GlobaldataService, private http:HttpClient){} // added http // for fetching data from db fooditemexcel
  
  ngOnInit(): void {
    //to access globalId created
      this.globalid.userid.subscribe(res=>{
        this.userId=res;
      })     
      this.displayFoodItem(); // for fetching data from db fooditemexcel

    }

    // displayFoodItem(){
    //   let data={
    //     fId:parseInt(this.userId)
    //   }
    //     //this.dataSrc.displayFoodItems(data).subscribe((x)=>{console.log(x)});
    //     //this.router.navigateByUrl("/");
    //     this.dataSrc.displayFoodItems(this.fId).subscribe(
    //       (response) => {
    //         this.food.push(response);
    //         // this.food = response;
    //         console.log(response);
    //       },
    //       // (error) => {
    //       //   console.error('Error fetching data:', error);
    //       // }
    //     );
        
    //     alert("Details displayed successfully");
      
    // }

    displayFoodItem() {
      const userId: number = parseInt(this.userId, 10);  // ensure numeric ID
    
      this.dataSrc.displayFoodItems(userId).subscribe(
        (response: any) => {
          console.log("API response:", response);
  
          //  Backend wraps the list in { key, value }
          this.food = response.value;
    
          // If backend ever returns array directly, use:
          // this.food = response;
        },
        (error) => {
          console.error("Error fetching data:", error);
        }
      );
    }
    
    
}
