package com.VAps.demo.dao;

import java.io.Serializable;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.NamedQuery;
import jakarta.persistence.Table;



@Entity

@Table(name="food_choice", schema = "public")
@NamedQuery(name="FoodChoice.findAll", query = "select m from FoodChoice m ")

public class FoodChoice implements Serializable{


		private static final long SerialVersionUID = 1L;
		@Id
		@Column(name = "id")
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private int id;
		
		@Column(name = "week_day")
		private String weekDay;
		
		@Column(name = "meal_type")
		private String mealType;
		
		@Column(name = "food_item")
		private String foodItem;
		
		@Column(name = "quantity")
		private double quantity;
		
		@Column(name = "calories_1")
		private double calories1;
		
		@Column(name = "fats_1")
		private double fats1;
		
		@Column(name = "proteins_1")
		private double proteins1;
		
		@Column (name = "f_id")
		private int fId;

		public int getId() {
			return id;
		}

		public void setId(int id) {
			this.id = id;
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

		public double getCalories1() {
			return calories1;
		}

		public void setCalories1(double calories1) {
			this.calories1 = calories1;
		}

		public double getFats1() {
			return fats1;
		}

		public void setFats1(double fats1) {
			this.fats1 = fats1;
		}

		public double getProteins1() {
			return proteins1;
		}

		public void setProteins1(double proteins1) {
			this.proteins1 = proteins1;
		}

		public int getfId() {
			return fId;
		}

		public void setfId(int fId) {
			this.fId = fId;
		}
		
		

		
}
