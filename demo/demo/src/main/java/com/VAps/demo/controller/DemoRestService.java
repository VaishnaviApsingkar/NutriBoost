package com.VAps.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import com.VAps.demo.bao.FoodChoiceBao;
import com.VAps.demo.bao.GlobalUserId;
import com.VAps.demo.bao.Pair;
import com.VAps.demo.bao.UserDetailsBao;
import com.VAps.demo.bao.UserProfileBao;
import com.VAps.demo.bas.DemoService;
import com.VAps.demo.bas.FoodItemService;
import com.VAps.demo.dao.AssetTraceability;
import com.VAps.demo.dao.FoodItemExcel;


@RestController
//@CrossOrigin(exposedHeaders = "http://localhost:4200")
@RequestMapping
@CrossOrigin(origins = "http://localhost:4200") 
public class DemoRestService {
	@Autowired
	private DemoService demoService;
	
	@Autowired
	private FoodItemService foodItemService;
	
	
	@PostMapping(value="/userDetails")
	public Pair saveUserDetails(@RequestBody UserDetailsBao bao) {
		
		return demoService.getUserDetails(bao);
		
	}
	
	@PostMapping(value="/checklogin")
	public Pair CheckLogin(@RequestBody UserDetailsBao bao) {
		
		return demoService.CheckLogin(bao);
		
	}
	

	
	@GetMapping(value = "/hello")
	public String hello() {
		return "Hello";
	}
	
	@PostMapping(value="/userProfile")
	public Pair UserProfile(@RequestBody UserProfileBao bao) {
		
		return demoService.getProfileDetails(bao);	
	}
	
	@PostMapping(value="/foodChoice")
	public Pair FoodChoice(@RequestBody FoodChoiceBao bao) {
		return demoService.getFoodChoice(bao);
	}
	
	//foodlist - call name coming from front end
//	@PostMapping(value="/foodlist") 
//	public List<FoodItemExcel> displayFoodItem(){
//		//to display food item table from db on UI
//		
//		return demoService.getFoodList();
//	}
	
	
	@GetMapping(value="/fooditemexcel")
	public Pair FoodItemExcel() {
		return demoService.getFoodItemExcelList();
	}
	
//	@GetMapping("/fooditemexcel")
//	public List<FoodItem> getAllFoodItems() {
//	    return foodItemService.getAllFoodItems();
//	}
	

	@PostMapping(value="/foodChoicebyId")
	public Pair getFood(@RequestBody GlobalUserId bao) {
		return demoService.getFoodItemDisplay(bao);
	}
	
	//global search
	
//	@GetMapping(value="/all")
//	public List<FoodItemExcel> getAllFoodItems(String keyword){
//		return demoService.getAllFoodItems();
//	}
	

	//@GetMapping("/search")
    //public List<FoodItemExcel> searchFoodItems(@RequestParam String keyword) {
        //return foodItemService.searchFoodItems(keyword);
    //}
	


//	@RestController
//	@RequestMapping("/api/food-items")
//	public class FoodItemController {
//
//	    @Autowired
//	    private FoodItemService foodItemService;

    @GetMapping(value="/search")
    public List<FoodItemExcel> searchFoodItems(@RequestParam("term") String term) {
        return foodItemService.searchFoodItems(term);
    }

	@GetMapping(value="/all")
	public List<FoodItemExcel> getAllFoodItems() {
	    return foodItemService.getAllDetails();
	}
	
	//for dashboard data
//	@GetMapping(value="/assets")
//	public List<AssetTraceability> getAssets() {
//	    return demoService.getAssets();
//	}


}

	
	