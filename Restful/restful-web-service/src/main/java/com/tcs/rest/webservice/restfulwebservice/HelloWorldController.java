package com.tcs.rest.webservice.restfulwebservice;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class HelloWorldController {

	@GetMapping(value="/hello")
	public ResponseEntity<String> helloWorld() {
		return new ResponseEntity<>("Heeeeelloooooo World",HttpStatus.OK);
	}
//	hello world bean
	@GetMapping(value="/hello-world-bean")
	public ResponseEntity<HelloWorldBean> helloWorldBean() {
		throw new RuntimeException("Some Error has happened! Contact Support");
//		return new ResponseEntity<>( new HelloWorldBean("Heeeeelloooooo World Bean"),HttpStatus.OK);
	}
	
	@GetMapping(value="/hello/{name}")
	public ResponseEntity<String> helloWorldPathVariable(@PathVariable String name){
//		return new ResponseEntity<>("Hello "+ name,HttpStatus.OK);
		return new ResponseEntity<>(String.format("Hello, %s", name),HttpStatus.OK);
	}
}
