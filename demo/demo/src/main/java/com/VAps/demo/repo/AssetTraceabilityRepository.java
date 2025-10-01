package com.VAps.demo.repo;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.VAps.demo.dao.AssetTraceability;

@Repository
public interface AssetTraceabilityRepository extends JpaRepository<AssetTraceability, Integer> {

}

