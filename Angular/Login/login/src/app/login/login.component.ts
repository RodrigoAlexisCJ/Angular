import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  username:  string="pashu";
  password="";
  errorMessage="Invalid Credentials";
  invalidLogin=false;
//Router
//Angular.giveMeRouter
//Depency Injection

  constructor(private router:Router){}

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
  handleLogin(){
    if(this.username==="pashu" && this.password==="dummy"){
      //Redirect to Welcome Page
      this.invalidLogin=false;
      this.router.navigate(['welcome',this.username]);
    }
    else
    {
      this.invalidLogin=true;
    }
    console.log(this.username + " & "+ this.password + " & " + this.invalidLogin);
  }

}
