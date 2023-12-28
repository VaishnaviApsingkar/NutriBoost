package com.VAps.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.VAps.demo.dao.UserProfile;
@Repository 
public interface UserProfileRepository extends JpaRepository <UserProfile, Integer>{
	

}
