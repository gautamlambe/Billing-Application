package com.biller.entity;

import java.time.LocalDate;

public class Item {
	
	private Integer itemId;
	private String itemname;
	private float price;
	private int quantity;
	private LocalDate expirydate;
	
	//constructor
	
	public Item(Integer itemId, String name, float price, int quantity, LocalDate expiry) {
		super();
		this.itemId = itemId;
		this.itemname = name;
		this.price = price;
		this.quantity = quantity;
		this.expirydate = expiry;
	}
	
	//getters & setters
	
	public Integer getItemId() {
		return itemId;
	}
	public void setItemId(Integer itemId) {
		this.itemId = itemId;
	}
	public String getItemname() {
		return itemname;
	}
	public void setItemname(String name) {
		this.itemname = name;
	}
	public float getPrice() {
		return price;
	}
	public void setPrice(float price) {
		this.price = price;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public LocalDate getExpirydate() {
		return expirydate;
	}
	public void setExpirydate(LocalDate expiry) {
		this.expirydate = expiry;
	}

	@Override
	public String toString() {
		return "Item [itemId=" + itemId + ", name=" + itemname + ", price=" + price + ", quantity=" + quantity + ", expiry="
				+ expirydate + "]";
	}
	
	

}
