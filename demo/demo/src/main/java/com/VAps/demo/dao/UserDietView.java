package com.VAps.demo.dao;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.NamedQuery;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity

@Table(name="user_diet_view", schema = "public")
@NamedQuery(name="UserDietView.findAll", query = "select m from UserDietView m ")

public class UserDietView implements Serializable{
	
	private static final long SerialVersionUID = 1L;
	@Id
	@Column(name = "diet_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int dietId;
	
	@Column(name = "week_day")
	private String weekDay;
	
	@Column(name = "meal_type")
	private String mealType;
	
	@Column(name = "food_item")
	private String foodItem;
	
	@Column(name = "quantity")
	private double quantity;
	
	@Column(name = "calories")
	private double calories;
	
	@OneToOne
	@JoinColumn (name="serialId")
	private UserProfile serialId; 
	
	@ManyToOne
	@JoinColumn(name = "id")
	private FoodChoice id;

	public int getDietId() {
		return dietId;
	}

	public void setDietId(int dietId) {
		this.dietId = dietId;
	}

	public String getWeekDay() {
		return weekDay;
	}

	public void setWeekDay(String weekDay) {
		this.weekDay = weekDay;
	}

	public String getMealType() {
		return mealType;
	}

	public void setMealType(String mealType) {
		this.mealType = mealType;
	}

	public String getFoodItem() {
		return foodItem;
	}

	public void setFoodItem(String foodItem) {
		this.foodItem = foodItem;
	}

	public double getQuantity() {
		return quantity;
	}

	public void setQuantity(double quantity) {
		this.quantity = quantity;
	}

	public double getCalories() {
		return calories;
	}

	public void setCalories(double calories) {
		this.calories = calories;
	}

	public UserProfile getSerialId() {
		return serialId;
	}

	public void setSerialId(UserProfile serialId) {
		this.serialId = serialId;
	}

	public FoodChoice getId() {
		return id;
	}

	public void setId(FoodChoice id) {
		this.id = id;
	}
	
	

	
	
	
	
}
