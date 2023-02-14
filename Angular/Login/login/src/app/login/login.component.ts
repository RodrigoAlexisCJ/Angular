import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

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

  constructor(private router:Router,
    private hardcodedAuthentication:HardcodedAuthenticationService){}

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
  handleLogin(){
    //if(this.username==="pashu" && this.password==="dummy"){
    if(this.hardcodedAuthentication.authenticate(this.username,this.password)){
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
