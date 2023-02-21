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
  welcomeMessageFrom=''
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

    this.welcomeData.executeHelloWorldBeanService().subscribe(
      //next=> this.handleSuccessfulResponse(next), 
      //error => this.handleErrorResponse(error)
      //{next: this.handleSuccessfulResponse.bind(this), 
      //error: this.handleErrorResponse.bind(this)}
      {next: (n)=>this.handleSuccessfulResponse(n), 
      error: (e)=>this.handleErrorResponse(e)}
      );
      console.log('last line of getWelcomeMessage')
    //this.welcomeData.executeHelloWorldBeanService();
  }

  handleSuccessfulResponse(response: any){
    console.log(response);
    console.log(response.message);
    this.welcomeMessageFrom=response.message;
  }

  handleErrorResponse(error:any){
    console.log(error);
    console.log(error.error);
    console.log(error.error.message);
    this.welcomeMessageFrom = error.error.message;
  }

}
