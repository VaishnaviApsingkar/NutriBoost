package com.VAps.demo.bas;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.VAps.demo.bao.FoodChoiceBao;
import com.VAps.demo.bao.GlobalUserId;
import com.VAps.demo.bao.Pair;
import com.VAps.demo.bao.UserDetailsBao;
import com.VAps.demo.bao.UserProfileBao;
import com.VAps.demo.controller.FoodItemExcel;
import com.VAps.demo.dao.FoodChoice;
import com.VAps.demo.dao.UserDetails;
import com.VAps.demo.dao.UserProfile;
import com.VAps.demo.repo.FoodChoiceRepository;
import com.VAps.demo.repo.FoodItemExcelRepository;
import com.VAps.demo.repo.UserDetailsRepository;
import com.VAps.demo.repo.UserProfileRepository;

@Service
public class DemoService {
	@Autowired
	private UserDetailsRepository userDetailsRepository;
	@Autowired
	private UserProfileRepository userProfileRepository;

	@Autowired
	private FoodChoiceRepository foodChoiceRepository;
	
	@Autowired
	private FoodItemExcelRepository foodItemExcelRepository;
	
	public Pair getUserDetails(UserDetailsBao user) {
		Pair obj = new Pair();

		UserDetails det = new UserDetails();
		det.setFirstname(user.getFirstname());
		det.setLastname(user.getLastname());
		det.setPassword(user.getPassword());
		det.setUsername(user.getUsername());

		userDetailsRepository.save(det);
		obj.setKey("Success");
		obj.setValue("Data saved successfully");

		return obj;
	}

	public Pair CheckLogin(UserDetailsBao user) {

		Pair obj = new Pair();
		
		if(user.getUsername()!= null && user.getPassword()!= null) {
			
			UserDetails det=userDetailsRepository.checkLogin(user.getUsername(),user.getPassword());
			
		
		
		if(det!=null) {
			obj.setKey("Success");
			obj.setValue(det.getId());
			//obj.setValue("User login successful");	
			
		
		}
		else {
			obj.setKey("Failed");
			obj.setValue("User login failed");
		}
					
		}	
	return obj;
	}
	
	public Pair getProfileDetails(UserProfileBao prof) {
		Pair obj = new Pair();
		
		UserProfile profile = new UserProfile();
		//UserProfileBao prof = new UserProfileBao();
		
		profile.setGender(prof.getGender());
		profile.setAge(prof.getAge());
		profile.setHeight(prof.getHeight());
		profile.setWeight(prof.getWeight());
		profile.setExercise(prof.getIsExercise());
		
		profile.setuId(prof.getuId());
		
		userProfileRepository.save(profile);
		
		obj.setKey("Success");
		obj.setValue("User's profile saved successfully");
		
		
	return obj;
		
	}
	
	public Pair getFoodChoice(FoodChoiceBao item) {
		Pair obj=new Pair();
		
		FoodChoice fch=new FoodChoice();
		
		fch.setWeekDay(item.getWeek_day());
		fch.setMealType(item.getMeal_type());
		fch.setFoodItem(item.getFood_item());
		fch.setQuantity(item.getQuantity());
		fch.setCalories1(item.getCalories_1());
		fch.setFats1(item.getFats_1());
		fch.setProteins1(item.getProteins_1());
		fch.setfId(item.getF_id());
		
		foodChoiceRepository.save(fch);
		obj.setKey("Success");
		obj.setValue("Food item added successfully");
		
		return obj;
		
	}
	

	public Pair getFoodItemExcelList() {
		// TODO Auto-generated method stub
		Pair obj1 = new Pair();
		foodItemExcelRepository.getAllDetails();
		obj1.setKey("Success");
		obj1.setValue(foodItemExcelRepository.getAllDetails());
	
		return obj1;
	}
	
	public Pair getFoodItemDisplay(GlobalUserId bao) {
		// TODO Auto-generated method stub
		Pair obj2 = new Pair();
		
		obj2.setKey("Success");
		obj2.setValue(foodChoiceRepository.displayFood(bao.getfId()));
	
		return obj2;
	}

	
	public void run(String... args) {
		
		
	}
	
}
