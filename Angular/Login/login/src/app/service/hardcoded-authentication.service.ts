import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }
  authenticate(username:string,password:string){
    if(username==="pashu" && password==="dummy"){
      //Redirect to Welcome Page
      sessionStorage.setItem('athenticatedUser',username);
      return true;
    }
    else
    {
      return false;
    }
  }
}
