package com.VAps.demo.bao;

//do we need to take data from user this way or just a selected 
//data from table directly we will insert into db table;

public class FoodChoiceBao {

	private String week_day;
	private String meal_type;
	private String food_item;
	private double quantity;
	private double calories_1;
	private double fats_1;
	private double proteins_1;
	private int f_id;
	
	
	
	public int getF_id() {
		return f_id;
	}
	public void setF_id(int f_id) {
		this.f_id = f_id;
	}
	public String getWeek_day() {
		return week_day;
	}
	public void setWeek_day(String week_day) {
		this.week_day = week_day;
	}
	public String getMeal_type() {
		return meal_type;
	}
	public void setMeal_type(String meal_type) {
		this.meal_type = meal_type;
	}
	public String getFood_item() {
		return food_item;
	}
	public void setFood_item(String food_item) {
		this.food_item = food_item;
	}
	public double getQuantity() {
		return quantity;
	}
	public void setQuantity(double quantity) {
		this.quantity = quantity;
	}
	public double getCalories_1() {
		return calories_1;
	}
	public void setCalories_1(double calories_1) {
		this.calories_1 = calories_1;
	}
	public double getFats_1() {
		return fats_1;
	}
	public void setFats_1(double fats_1) {
		this.fats_1 = fats_1;
	}
	public double getProteins_1() {
		return proteins_1;
	}
	public void setProteins_1(double proteins_1) {
		this.proteins_1 = proteins_1;
	}
	
}
