package com.tcs.rest.webservice.restfulwebservice.todo;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class TodoResource {

	@Autowired
	private TodoHardcodedService todoService;
	
	@GetMapping(value="/users/{username}/todos")
	public ResponseEntity<List<Todo>> getAllTodos(@PathVariable String username){
		return new ResponseEntity<>(todoService.returnList(),HttpStatus.OK);
	}
	
	@GetMapping(value="/users/{username}/todos/{id}")
	public ResponseEntity<Todo> getTodo(@PathVariable String username,@PathVariable long id){
		return new ResponseEntity<>(todoService.findById(id),HttpStatus.OK);
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
	
	@PutMapping(value="/users/{username}/todos/{id}")
	public ResponseEntity<Todo> updateTodo(@PathVariable String username,
			@PathVariable long id, @RequestBody Todo todo){
		return new ResponseEntity<>(todoService.save(todo),HttpStatus.OK);
				
//		return todo!=null?ResponseEntity.noContent().build():ResponseEntity.notFound().build();
	}
	
	@PostMapping(value="/users/{username}/todos")
	public ResponseEntity<Void> addTodo(@PathVariable String username, 
			@RequestBody Todo todo){
		Todo createdTodo = todoService.save(todo);
		URI uri=ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
		.buildAndExpand(createdTodo.getId()).toUri();
	return ResponseEntity.created(uri).build();	
	}
}
