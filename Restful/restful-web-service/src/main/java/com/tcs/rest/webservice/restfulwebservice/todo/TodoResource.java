package com.tcs.rest.webservice.restfulwebservice.todo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class TodoResource {

	@Autowired
	private TodoHardcodedService todoService;
	
	@GetMapping(value="/users/{username}/todos")
	public ResponseEntity<List<Todo>> getAllTodos(@PathVariable String username){
		return new ResponseEntity<>(todoService.returnList(),HttpStatus.OK);
	}
	@DeleteMapping(value="/users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodo(@PathVariable String username,
			@PathVariable long id){
		Todo todo=todoService.deletById(id);
		return todo!=null?ResponseEntity.noContent().build():ResponseEntity.notFound().build();
//		if(todo != null) {
//			return ResponseEntity.noContent().build();
//		}
//		return ResponseEntity.notFound().build();
		
	}
}
