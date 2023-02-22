package com.tcs.rest.webservice.restfulwebservice.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardcodedService {
	private static int idCounter;
	private static List<Todo> list = new ArrayList<>(List.of(
		new Todo (++idCounter,"pashu","Become an expert on java", new Date(), false),
		new Todo (++idCounter,"pashu","Visit Utah",new Date(),false),
		new Todo (++idCounter,"pashu","Play Baseball",new Date(),false),
		new Todo (++idCounter,"pashu","Learn Angular",new Date(),false)		
		)
		);

	public List<Todo> returnList(){
		return list;
	}
	
	public Todo save(Todo todo) {
		if(todo.getId()==-1 || todo.getId()==0) {
			todo.setId(++idCounter);
			list.add(todo);
		}
		else {
			this.deletById(todo.getId());
			list.add(todo); 
		}
		return todo;
	}
	
	public Todo deletById(long id) {
		Todo todo = findById(id);
		if(todo==null) return null;
		
		if(list.remove(todo)) {
			return todo;
		}
		return null;
	}

	public Todo findById(long id) {
		for(Todo todo:list) {
			if(todo.getId()==id) {
				return todo;
			}
		}
		return null;
	}

}
