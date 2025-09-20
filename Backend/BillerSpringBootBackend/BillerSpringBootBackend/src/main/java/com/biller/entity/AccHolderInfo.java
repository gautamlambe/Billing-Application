package com.biller.entity;

public class AccHolderInfo {
	
	String name;
	String mobile;
	String contactperson;
	String adhar;
	String address;
	
	
	
	public AccHolderInfo(String name, String mobile, String contactperson, String adhar, String address) {
		super();
		this.name = name;
		this.mobile = mobile;
		this.contactperson = contactperson;
		this.adhar = adhar;
		this.address = address;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getContactperson() {
		return contactperson;
	}
	public void setContactperson(String contactperson) {
		this.contactperson = contactperson;
	}
	public String getAdhar() {
		return adhar;
	}
	public void setAdhar(String adhar) {
		this.adhar = adhar;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	
	

}
