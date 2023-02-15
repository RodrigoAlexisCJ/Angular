import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  constructor(private hardcodedAuthentication:HardcodedAuthenticationService){}

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.hardcodedAuthentication.logout();
  }

}
