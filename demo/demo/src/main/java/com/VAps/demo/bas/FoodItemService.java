package com.VAps.demo.bas;
//
import com.VAps.demo.dao.FoodItemExcel;
import com.VAps.demo.repo.FoodItemExcelRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
import java.util.regex.Pattern;
//
//@Service
//public class FoodItemService {
//
//    @Autowired
//    private FoodItemExcelRepository foodItemExcelRepository;
//
//    public List<FoodItemExcel> searchFoodItems(String keyword) {
//        // Create regex to match any part of the text
//        String regex = ".*" + Pattern.quote(keyword) + ".*";
//        List<FoodItemExcel> results = foodItemExcelRepository.searchGlobal(regex);
//        return results;
//    }
//    
//}


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class FoodItemService {

    @Autowired
    private FoodItemExcelRepository foodItemExcelRepository;

    public List<FoodItemExcel> getAllDetails() {
        return foodItemExcelRepository.getAllDetails();
    }

    public List<FoodItemExcel> searchFoodItems(String term) {
//    	String searchTerm = ".*" + term + ".*"; 
        return foodItemExcelRepository.searchGlobal(term);
    
    }
}
