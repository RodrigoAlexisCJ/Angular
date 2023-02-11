import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  username:  string="pashu";
  password="";
  constructor(){}
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
  handleLogin(){
    console.log(this.username);
  }

}
