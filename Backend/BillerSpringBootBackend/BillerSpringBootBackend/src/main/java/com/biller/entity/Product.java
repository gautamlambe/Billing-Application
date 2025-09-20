package com.biller.entity;


public class Product {

	
	private Integer productId;
	private String ProductName;
	private String price;
	private String Description;
	
	
	public Product(Integer productId, String productName, String price, String description) {
		super();
		this.productId = productId;
		ProductName = productName;
		this.price = price;
		Description = description;
	}
	
	
	public Integer getProductId() {
		return productId;
	}
	public void setProductId(Integer productId) {
		this.productId = productId;
	}
	public String getProductName() {
		return ProductName;
	}
	public void setProductName(String productName) {
		ProductName = productName;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public String getDescription() {
		return Description;
	}
	public void setDescription(String description) {
		Description = description;
	}
	
	
}
