package com.VAps.demo.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.VAps.demo.dao.UserDetails;
@Repository 
public interface UserDetailsRepository extends CrudRepository<UserDetails,Integer>{

	@Query(value="SELECT det FROM com.VAps.demo.dao.UserDetails det WHERE det.username=:input1 AND det.password=:input2 ")
	public UserDetails checkLogin(@Param(value="input1") String input1 ,@Param(value="input2") String input2);
	
}
