package com.VAps.demo.repo;
//
//import java.util.List;
//
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//
//import org.springframework.data.repository.query.Param; //global search
//
//
import com.VAps.demo.dao.FoodItemExcel;
//
//public interface FoodItemExcelRepository extends JpaRepository <FoodItemExcel, String>{
//	
//	@Query(value="select food_id, food_item, quantity, calories from food_item_excel", nativeQuery = true)
//	List<FoodItemExcel> getAllDetails(); //to get all the data from the table
//	//if particular column, then we get list of that column only
//	//List<String> getListOfFoodItems();
//	//nativeQuery => helps compiler to run query same as of db SQL query  
//	
//	//global search update  (without id)	   
//	   @Query(value = "SELECT food_id, food_item, quantity, calories FROM food_item_excel " +
//               "WHERE food_item ~* :regex " +
//               "OR quantity ~* :regex " +
//               "OR calories ~* :regex", nativeQuery = true)
//	   List<FoodItemExcel> searchGlobal(@Param("regex") String regex);
//	   
//	   
//
//}

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface FoodItemExcelRepository extends JpaRepository<FoodItemExcel, Long> {
    // Custom query to retrieve all details from the table
    @Query(value = "SELECT * FROM food_item_excel", nativeQuery = true)
    List<FoodItemExcel> getAllDetails();

    // Search globally across multiple fields with a case-insensitive pattern
//    @Query(value = "SELECT * FROM food_item_excel WHERE " +
//                   "food_item ILIKE %:term% OR " +
//                   "quantity ILIKE %:term% OR " +
//                   "calories ILIKE %:term%", nativeQuery = true)
//    List<FoodItemExcel> searchGlobal(@Param("term") String term);
    
//    
//    @Query(value = "SELECT * FROM food_item_excel WHERE " +
//            "food_item LIKE %:term% OR " +
//            "quantity LIKE %:term% OR " +
//            "calories LIKE %:term%", nativeQuery = true)
//List<FoodItemExcel> searchGlobal(@Param("term") String term);
    
    //global search with regex query
    
    @Query(value = "SELECT * FROM food_item_excel WHERE " +
            "food_item ~* :regex OR " +
            "quantity ~* :regex OR " +
            "calories ~* :regex", nativeQuery = true)
List<FoodItemExcel> searchGlobal(@Param("regex") String regex);


}
