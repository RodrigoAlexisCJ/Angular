import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(private hardcodedAuthentication:HardcodedAuthenticationService,
    public router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //throw new Error('Method not implemented.');
    if(this.hardcodedAuthentication.isUserLoggedIn()){
      return true;
    }
    else{
      this.router.navigate(['login']);
      return false;
    }
  
  }
}
