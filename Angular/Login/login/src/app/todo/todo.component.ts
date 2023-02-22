import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { todo } from '../list-todos/list-todos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number = 0;
  tod: any

  constructor(
    private service: TodoDataService,
    private route: ActivatedRoute,
    private rout: Router
  ){}
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.tod = new todo(this.id,'','',new Date(),false);
    if(this.id!=-1){
      this.service.retrieveTodo('pashu',this.id).subscribe(
        data => this.tod=data
      );
    }
    else{

    }
  }
  saveTodo(){
    if(this.id == -1){
      this.service.createTodo('pashu',this.tod).subscribe(
        data => 
        {console.log(data)
          this.rout.navigate(['todos'])
        }
      );
    }
    else{
    this.id=this.route.snapshot.params['id'];
    this.service.updateTodo('pashu',this.id,this.tod).subscribe(
      data => 
      {console.log(data)
        this.rout.navigate(['todos'])
      }
    );
  }
}

}
