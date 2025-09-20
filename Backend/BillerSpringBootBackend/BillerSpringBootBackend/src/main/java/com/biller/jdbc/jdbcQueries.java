package com.biller.jdbc;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

@Component
public class jdbcQueries {

	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	public List<String> getSuggestionListResult(String query){
		
		String AcutalQuery= "select * from item where name like '%"+query+"%';";
		List<Map<String,Object>> list=jdbcTemplate.queryForList(AcutalQuery);
		List<String> resultList = new ArrayList<String>();
		for(Map<String, Object> map : list) {
			for(Map.Entry<String, Object> r : map.entrySet()) {
				if(r.getKey().toString().equals("name")) {
				resultList.add(r.getValue().toString());
				}
			}
		}
		
		System.out.println(String.valueOf(resultList));
		return resultList;
		
	}
	
	public List<Map<String, Object>> getAccountHolderSuggestionList(String query){
		String ActualQuery = "select * from accountholders where name like '%"+query+"%';";
		
		List<Map<String, Object>> result = jdbcTemplate.queryForList(ActualQuery);
		
		return result;
	}
	
	public List<Map<String,Object>> getSuggestionItemsList(String query){
		String actualQuery="Select * from items where name like '%"+query+"%';";
		List<Map<String, Object>> result= jdbcTemplate.queryForList(actualQuery);
	
		return result;
	}
	
}
