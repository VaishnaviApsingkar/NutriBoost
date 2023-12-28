package com.VAps.demo.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.VAps.demo.dao.FoodItemExcel;

public interface FoodItemExcelRepository extends JpaRepository <FoodItemExcel, String>{
	
	@Query(value="select food_id, food_item, quantity, calories from food_item_excel", nativeQuery = true)
	List<FoodItemExcel> getAllDetails(); //to get all the data from the table
	//if particular column, then we get list of that column only
	//List<String> getListOfFoodItems();
	//nativeQuery => helps compiler to run query same as of db SQL query  
}
