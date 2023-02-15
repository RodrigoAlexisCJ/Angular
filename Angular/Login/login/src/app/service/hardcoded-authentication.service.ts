import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }
  authenticate(username:string,password:string){
    //console.log('before '+this.isUserLoggedIn());
    if(username==="pashu" && password==="dummy"){
      //Redirect to Welcome Page
      sessionStorage.setItem('authenticatedUser',username);
      //console.log('after '+this.isUserLoggedIn());
      return true;
    }
    else
    {
      return false;
    }
  }
   isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null)
   }
   logout(){
    sessionStorage.removeItem('authenticatedUser');
   }
}
