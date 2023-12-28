package com.VAps.demo.dao;

import java.io.Serializable;


import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.NamedQuery;
import jakarta.persistence.Table;

@Entity

@Table(name="food_item_excel", schema = "public")
@NamedQuery(name="FoodItemExcel.findAll", query = "select m from FoodItemExcel m ")


public class FoodItemExcel implements Serializable{
//	mention all column names to be displayed from table
	private static final long SerialVersionUID = 1L;
	@Id
	@Column(name="food_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int FoodId;
	
	public int getFoodId() {
		return FoodId;
	}

	public void setFoodId(int foodId) {
		FoodId = foodId;
	}

	@Column(name="food_item")
	private String FoodItem;
	
	@Column(name="quantity")
	private String Quantity;
	
	@Column(name="calories")
	private String Calories;

	public String getFoodItem() {
		return FoodItem;
	}

	public void setFoodItem(String foodItem) {
		FoodItem = foodItem;
	}

	public String getQuantity() {
		return Quantity;
	}

	public void setQuantity(String quantity) {
		Quantity = quantity;
	}

	public String getCalories() {
		return Calories;
	}

	public void setCalories(String calories) {
		Calories = calories;
	}
	
	
	
	
	
}
