import { Component ,OnInit} from '@angular/core';
import { DemoserviceService } from '../demoservice.service';
import { Router } from '@angular/router';
import { GlobaldataService } from '../globaldata.service';
import { FormControl } from '@angular/forms';
import { HttpClient} from '@angular/common/http'; // for fetching data from db fooditemexcel
//import { map } from 'rxjs/operators';

@Component({
  selector: 'app-create-diet-plan',
  templateUrl: './create-diet-plan.component.html',
  styleUrls: ['./create-diet-plan.component.css']
})

export class CreateDietPlanComponent implements OnInit{
  gender:any;
  age:any;
  height:any;
  weight:any;
  isExercise:any;
  uId:any;
  f_id:any;
  userId:any;

  switch:boolean = false;

  week_day:any;
  meal_type:any;
  food_item:any;
  quantity:any;
  calories_1:any;
  fats_1:any;
  proteins_1:any;

  // allFood:any=[];
  // foodItem:any=[];
  // quantity:any=[];
  // calories:any=[];
  
  constructor (private dataSrc:DemoserviceService, private router:Router, private globalid:GlobaldataService, private http:HttpClient){} // added http // for fetching data from db fooditemexcel
  
  
  ngOnInit(): void {
    //to access globalId created
      this.globalid.userid.subscribe(res=>{
        this.userId=res;
      })     
      // this.getfooditemexcel(); // for fetching data from db fooditemexcel
    }

    
    // for fetching data from db fooditemexcel : below 1 method
    // onfetchFoodItemExcelData(){
    //   this.getfooditemexcel();
    // }



    switchChange(){
      this.switch=!this.switch;
    }


  saveProfile(){
    let data={
      gender:this.gender,
      age:this.age,
      height:this.height,
      weight:this.weight,
      isExercise:this.isExercise,
      uId:parseInt(this.userId)
      //userId:this.userId //to send id to backend 
    }
    if(data.gender && data.age && data.height && data.weight && data.isExercise ){
      this.dataSrc.userProfileDetails(data).subscribe((x)=>{console.log(x)});
      //this.router.navigateByUrl("/");
      alert("Click on proceed to create diet plan!");

    }
    else{
      alert("Enter all the details");
    }
  }

  saveFoodItem(){
    let data={
      week_day:this.week_day,
      meal_type:this.meal_type,
      food_item:this.food_item,
      quantity:this.quantity,
      calories_1:this.calories_1,
      fats_1:this.fats_1,
      proteins_1:this.proteins_1,
      f_id:parseInt(this.userId)
    }

    if(data.week_day && data.meal_type && data.food_item && data.quantity 
      && data.calories_1 && data.fats_1 && data.proteins_1){
      this.dataSrc.saveFoodChoice(data).subscribe((x)=>{console.log(x)});
      //this.router.navigateByUrl("/");
      alert("Details saved successfully! Click on Proceed if you are done with adding items");

    }
    else{
      alert("Enter all the details");
    }
  }

  // for fooditem fetch from db table
  // async fetchfooditemexcel(){
  //   this.dataSrc.getfooditemexcel().then((response:any)=>
  //   {
  //     if(response.key.toLowerCase == 'success'){
  //       this.allFood = response.value;
  //     }
  //   });
  // }

  
}

