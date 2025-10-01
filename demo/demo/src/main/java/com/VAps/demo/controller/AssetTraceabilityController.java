//package com.VAps.demo.controller;
//
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.VAps.demo.dao.AssetTraceability;
//import com.VAps.demo.repo.AssetTraceabilityRepository;
//
//import java.util.List;
//
//@RestController
//@CrossOrigin(origins="http://localhost:4200")
//public class AssetTraceabilityController {
//    private final AssetTraceabilityRepository assetTraceabilityRepository;
//
//    public AssetTraceabilityController(AssetTraceabilityRepository assetTraceabilityRepository) {
//        this.assetTraceabilityRepository = assetTraceabilityRepository;
//    }
//
//    @GetMapping("/assets")
//    public List<AssetTraceability> getAllAssets() {
//        return assetTraceabilityRepository.findAll();
//    }
//}

package com.VAps.demo.controller;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.VAps.demo.dao.AssetTraceability;
import com.VAps.demo.repo.AssetTraceabilityRepository;

import java.awt.print.Pageable;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/assets") // Ensures /assets maps directly
public class AssetTraceabilityController {

    private final AssetTraceabilityRepository assetTraceabilityRepository;

    public AssetTraceabilityController(AssetTraceabilityRepository assetTraceabilityRepository) {
        this.assetTraceabilityRepository = assetTraceabilityRepository;
    }

    @GetMapping
    public List<AssetTraceability> getAllAssets() {
        return assetTraceabilityRepository.findAll();
//        		.stream().limit(10).collect(Collectors.toList());
    }
//    @GetMapping
//    public Page<AssetTraceability> getAllAssets(
//            @RequestParam(defaultValue = "0") int page,
//            @RequestParam(defaultValue = "10") int size) {
//        Pageable pageable = PageRequest.of(page, size);
//        return assetTraceabilityRepository.findAll(pageable);
//    }
}

