package com.VAps.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.VAps.demo.dao.FoodChoice;
import com.VAps.demo.dao.UserDetails;

@Repository
public interface FoodChoiceRepository extends JpaRepository<FoodChoice,Integer> {

	@Query(value="SELECT det FROM com.VAps.demo.dao.FoodChoice det WHERE det.fId=:input1")
	public FoodChoice displayFood(@Param(value="input1") int input1);
	

}
