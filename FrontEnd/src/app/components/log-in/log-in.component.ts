import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { and, forEach } from '@angular/router/src/utils/collection.js';
import { Token } from '@angular/compiler';
import { container, element } from '@angular/core/src/render3/instructions.js';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
  providers: [HttpClient]
})

export class LogInComponent implements OnInit {

  users: any[] = [
    { username: "furkanbeyaz", password: 123 },
    { username: "aaa", password: 456 },
    { username: "bbb", password: 789 }
  ]

  username: any = '';
  password: any = '';

  token = localStorage.getItem("token");


  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
  }

  public loginUser() {
    this.users.forEach(element => {
      if (element.username == this.username && element.password == this.password) {
         this.found(element);
         window.location.reload();
      }
      else if (element.username != this.username && element.password == this.password) {
        console.log("username hatalı password doğru");
      }
      else if (element.username == this.username && element.password != this.password) {
        console.log("username doğru password hatalı");
      } 
      else if (element.username != this.username && element.password != this.password){
        console.log("ikisi de hatalı");       
      }
    });
  }

  public found(element) {
    console.log("Welcome", element.username)
    console.log("Your Password:", element.password)
    this.getToken()
  };

  public getToken() {
    this.http.post<any>('http://localhost:4000/token/getToken', {}).subscribe((res: any) => {
      console.log("tokenburada:",res.token);
      localStorage.setItem("token", res.token)
      var a = localStorage.getItem("token")

    
      if (res.token != null) {
        console.log("Your Token: ", a);
      }
      else{
        console.log("token yok: ",res.token);        
      }
    },(err:any)=>{
      console.log('error: ',err)
      
    }
    )
  }
  
}