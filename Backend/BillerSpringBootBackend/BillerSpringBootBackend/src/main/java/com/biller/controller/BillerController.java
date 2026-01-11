package com.biller.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.biller.entity.AccHolderInfo;
import com.biller.entity.Item;
import com.biller.entity.Product;
import com.biller.jdbc.jdbcQueries;

@RestController
@CrossOrigin(origins = "http://localhost:5173") 
public class BillerController {

	
	
	@Autowired
	private jdbcQueries jdbcQueries;
	
	
	@GetMapping("/item/{query}")
	public ResponseEntity<?> getSuggestionResultList(@PathVariable String query){
		List<String> list=jdbcQueries.getSuggestionListResult(query);
		return ResponseEntity.ok(list);
	}
	
	@GetMapping("products/all")
	public ResponseEntity<?> getProductList(){
		
		Product p1 = new Product(1, "SmartWatch", "1500", "Duplicate copy of Gshock branded Watch ");
	
		Product p2 = new Product(2, "SmartWatch", "1500", "Duplicate copy of Gshock branded Watch ");

		Product p3 = new Product(3, "SmartWatch", "1500", "Duplicate copy of Gshock branded Watch ");

		Product p4 = new Product(4, "SmartWatch", "1500", "Duplicate copy of Gshock branded Watch ");

		Product p5 = new Product(5, "SmartWatch", "1500", "Duplicate copy of Gshock branded Watch ");

		Product p6 = new Product(6, "SmartWatch", "1500", "Duplicate copy of Gshock branded Watch ");

		Product p7 = new Product(7, "SmartWatch", "1500", "Duplicate copy of Gshock branded Watch ");

		Product p8 = new Product(8, "SmartWatch", "1500", "Duplicate copy of Gshock branded Watch ");

		Product p9 = new Product(9, "SmartWatch", "1500", "Duplicate copy of Gshock branded Watch ");

		Product p10 = new Product(10, "SmartWatch", "1500", "Duplicate copy of Gshock branded Watch ");

		return ResponseEntity.ok(List.of(p1,p2, p3, p4, p5, p6, p7, p8, p9, p10));
	}
	
	@GetMapping("accountsholder/name/{query}")
	public ResponseEntity<?> getAccountHolderSuggestion(@PathVariable String query){
		System.out.println(query);
		return ResponseEntity.ok(jdbcQueries.getAccountHolderSuggestionList(query));
	}
	@GetMapping("suggestion/items/{query}")
	public ResponseEntity<?> getSuggestionItemList(@PathVariable String query){
		System.out.println(query);
		return ResponseEntity.ok(jdbcQueries.getSuggestionItemsList(query));
	}
	@PostMapping("admin/accholderinfo/save")
	public ResponseEntity<?> saveAccountHolderInfo(@RequestBody AccHolderInfo accHolderInfo){
		
		System.out.println("obj:["+accHolderInfo.getName()+","+accHolderInfo.getMobile()+","+accHolderInfo.getAdhar()+","+accHolderInfo.getContactperson()+","+accHolderInfo.getAddress()+"]");
		
		return ResponseEntity.accepted().build();
	}
	@PostMapping("admin/Items/add")
	public ResponseEntity<?> saveItems(@RequestBody Item item){
		
		System.out.println(item.toString());
		
		return ResponseEntity.accepted().body(item);
	}
}
