import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class HelloWorldBean{
  constructor(public message:string){}
}


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http:HttpClient) { }
  //constructor(){}

  executeHelloWorldBeanService(){
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
    //return this.http.get('http://localhost:8080/hello');
    //console.log("Execute Hello World Bean Service");
  }

  executeHelloWorldPathService(name:string){
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-wold/path-var/${name}`);
    //return this.http.get('http://localhost:8080/hello');
    //console.log("Execute Hello World Bean Service");
  }
}
