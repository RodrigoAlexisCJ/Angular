import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{
  message= "Some welcome message"
  name=''
  //ActivatedRoute
  constructor(private route:ActivatedRoute, private welcomeData:WelcomeDataService){

  }
  
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    //console.log(this.message);
    //console.log(this.route.snapshot.params['name'])
    this.name= this.route.snapshot.params['name']
  }
  getWelcomeMessage(){
    console.log(this.welcomeData.executeHelloWorldBeanService());
    //this.welcomeData.executeHelloWorldBeanService();
  }

}
