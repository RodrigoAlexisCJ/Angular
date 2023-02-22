import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class todo{
  constructor(
    public id: number,
    public username: string,
    public description:string,
    public targetDate: Date,
    public done: boolean
    ){
  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  /*todos=[
    new todo(1,'Learn to Dance',false,new Date()),
    new todo(2,'Become an Expert on Angular',false,new Date()),
    new todo(3,'Visit Utah',false,new Date())
  ]*/

  todos: todo[] = [];

  message:string='';
  

  /*todos=[
    {id:1, description:'Learn to Dance' },
    {id:2, description:'Become an Expert on Angular'},
    {id:3, description:'Visit Utah'}
  ]*/

  /*todo ={
    id: 1,
    description:'Learn to Dance'
  }*/
  constructor(
    private service: TodoDataService,
    private router: Router
    ){}
  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos(){
    this.service.retrieveAllTodos('pashu').subscribe(
      {next: (n)=>this.todos=n
        }
    );
  }
  deleteTodo(id:number){
    console.log(`delete todo ${id}`);
    this.service.deletTodo('pashu',id).subscribe(
      {
        next: (n)=> {
        this.message=`Delete todo ${id} Successful!`;
        this.refreshTodos();
        }
      }
    );
  }
  updateTodo(id:number){
    console.log(`update todo ${id}`);
    this.router.navigate(['todos',id]);
  }

  addTodo(){
    this.router.navigate(['todos',-1]);
  }
}
