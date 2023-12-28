import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DemoserviceService {

  constructor(private http:HttpClient) { }

  registerUser="http://localhost:8080/userDetails";
  checkLogin="http://localhost:8080/checklogin";
  profile="http://localhost:8080/userProfile";
  fooditemssave="http://localhost:8080/foodChoice";
  foodItemDisplay="http://localhost:8080/foodChoicebyId";  

  // getfooditemexcel(){
  //   return this.http.get(this.fooditemexcel).toPromise();
  // }  
  postRegister(data:any){
    return this.http.post(this.registerUser, data);
  }

  postCheckLogin(data:any){
    console.log('Success');
    return this.http.post(this.checkLogin, data);
    
  }

  userProfileDetails(data:any){
    console.log('Success');
    return this.http.post(this.profile, data);

  }

  saveFoodChoice(data:any){
    console.log('Success');
    return this.http.post(this.fooditemssave, data)
  }
  
  displayFoodItems(id:any){
    let newData:FormData = new FormData;
    newData.append("id",id);
    console.log('Success');
    const data = {
      fId: '1'
  }
    return this.http.post(this.foodItemDisplay, data)
  }

}
