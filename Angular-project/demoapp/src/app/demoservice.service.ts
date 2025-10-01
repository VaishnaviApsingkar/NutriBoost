import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface AssetTraceability { //dashboard 
  assetId: number;
  ouId: number;
  ouName: string;
  assetName: string;
  assetType: string;
  dateAdded: Date;
  assetStatus: string;
  complianceStatus: string;
  brandId: number;
  brandName: string;
}

@Injectable({
  providedIn: 'root'
})
export class DemoserviceService {

  constructor(private http:HttpClient) { }

  // registerUser="http://localhost:8080/userDetails";
  // checkLogin="http://localhost:8080/checklogin";
  // profile="http://localhost:8080/userProfile";
  // fooditemssave="http://localhost:8080/foodChoice";
  // foodItemDisplay="http://localhost:8080/foodChoicebyId"; 
  // viewFoodItem = "http://localhost:8080/fooditemexcel"; 
  // searchedFoodItems = "http://localhost:8080/search"; // global search
  // viewDashboard = "http://localhost:8080/dashboard"; //dashboard


    registerUser="http://localhost:8081/userDetails";
  checkLogin="http://localhost:8081/checklogin";
  profile="http://localhost:8081/userProfile";
  fooditemssave="http://localhost:8081/foodChoice";
  foodItemDisplay="http://localhost:8081/foodChoicebyId"; 
  viewFoodItem = "http://localhost:8081/fooditemexcel"; 
  searchedFoodItems = "http://localhost:8081/search"; // global search
  viewDashboard = "http://localhost:8081/dashboard"; //dashboard



  // getfooditemexcel(){
  //   return this.http.get(this.fooditemexcel).toPromise();
  // } 

  

  //global search 
  searchGlobal(keyword: string): Observable<any[]> {
    const params = new HttpParams().set("term", keyword);
    return this.http.get<any[]>(this.searchedFoodItems, { params });
  }

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
  
  // displayFoodItems(id:any){
  //   let newData:FormData = new FormData;
  //   newData.append("id",id);
  //   console.log('Success');
  //   const data = {
  //     fId: '1'
  // }
  //   return this.http.post(this.foodItemDisplay, data)
  // }

  displayFoodItems(userId: number) {
    const data = { fId: userId };   // use the actual logged-in user's ID
    console.log("Fetching diet plan for user:", data);
    return this.http.post(this.foodItemDisplay, data);
  }
  

  //to display food items
  getAllFoodItem():Observable<any[]> {
      return this.http.get<any[]>(this.viewFoodItem);  // HTTP GET request
  }

  //to view dashboard 
  getAssets(): Observable<AssetTraceability[]> {
    return this.http.get<AssetTraceability[]>(this.viewDashboard);
  }
}
