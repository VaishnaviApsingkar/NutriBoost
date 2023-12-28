package com.VAps.demo.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class FoodItemDisplay {
	private Object jdbcTemplate;

	@Autowired
	private JdbcTemplate jdbcTemplate1;
	
	
	public void createTable() {
		//to create table in pgadmin db
		var query= "create table foodtest(id SERIAL PRIMARY KEY, foodname varchar(255)NOT NULL, amount varchar(255)";
		int update= ((JdbcTemplate) this.jdbcTemplate).update(query);
		System.out.print(update);
	}
}
