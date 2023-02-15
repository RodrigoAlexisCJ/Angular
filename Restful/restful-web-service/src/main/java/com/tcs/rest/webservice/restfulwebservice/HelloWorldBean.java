package com.tcs.rest.webservice.restfulwebservice;

public class HelloWorldBean {
	private String message;
	
	public HelloWorldBean() {}
	
	public HelloWorldBean(String message) {
		this.message=message;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	@Override
	public String toString() {
		return String.format("HelloWorldBean [message=%]", message);
	}
}
