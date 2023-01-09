import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as logInComponent from "../log-in/log-in.component"

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})


export class LogOutComponent implements OnInit {

  loggedIn: boolean = true;
  token: string = localStorage.getItem("token");
  loginPanel: boolean = false;

  constructor(private router: Router) {


  }

  public go() {
    localStorage.removeItem('token');
    // this.router.navigateByUrl("aa")
    window.location.replace("/logIn");

  }

  ngOnInit() {
  }
}