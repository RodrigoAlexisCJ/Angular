import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http:HttpClient) { }
  retrieveAllTodos(username:string){
    return this.http.get<todo[]>(`http://localhost:8080/users/${username}/todos`);
  }
  deletTodo(username:string,id:number){
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`);
  }
  retrieveTodo(username:string,id:number){
    return this.http.get<todo>(`http://localhost:8080/users/${username}/todos/${id}`);
  }
  updateTodo(username:string,id:number,todo:any){
    return this.http.put<todo>(`http://localhost:8080/users/${username}/todos/${id}`,todo);
  }
  createTodo(username:string,todo:any){
    return this.http.post(`http://localhost:8080/users/${username}/todos`,todo);
  }
}
