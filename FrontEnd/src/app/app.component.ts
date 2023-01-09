import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as io from 'socket.io-client';
import * as rxjs from 'rxjs';

import { Subscription, timer } from "rxjs";
import { map, share } from "rxjs/operators";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpClient]

})
export class AppComponent implements OnInit {

  time = new Date();
  rxTime = new Date();
  intervalId;
  subscription: Subscription;


  users: any[] = [
    { username: "furkanbeyaz", password: 123 },
    { username: "aaa", password: 456 },
    { username: "bbb", password: 789 }
  ]

  // DIGITAL CLOCK
  ngOnDestroy() {
    clearInterval(this.intervalId);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  // DIGITAL CLOCK
  ngOnInit() {
    // Using Basic Interval
    this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);

    // Using RxJS Timer
    this.subscription = timer(0, 1000)
      .pipe(
        map(() => new Date()),
        share()
      )
      .subscribe(time => {
        this.rxTime = time;
      });
  }

  username: any = '';
  password: any = '';

  title = 'projectWithTemplate';
  token: string = localStorage.getItem("token");
  private subject: rxjs.Subject<MessageEvent>;
  
  constructor(private http: HttpClient, private route: Router) {

    this.subject = this.create("ws://localhost:4000");
    console.log("data: ", this.create("ws://localhost:4000"));
  }
  
  // SOCKET, FAILED
  public create(url: string) {
    let socket = new WebSocket(url);
    //const socket = io("http://localhost:4000", {
    //  transports: ['websocket', 'polling', 'flashsocket']
    //  
    //});
    let observable = rxjs.Observable.create((obs: rxjs.Observer<MessageEvent>) => {
      socket.onmessage = obs.next.bind(obs);
      socket.onerror = obs.error.bind(obs);
      socket.onclose = obs.complete.bind(obs);
      return socket.close.bind(socket);
    });
    let observer = {
      next: (data: Object) => {
        if (socket.readyState === WebSocket.OPEN) {
          socket.send(JSON.stringify(data));
        }
      }
    };
    return rxjs.Subject.create(observer, observable);
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
      else if (element.username != this.username && element.password != this.password) {
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
      console.log("tokenburada:", res.token);
      localStorage.setItem("token", res.token)
      var a = localStorage.getItem("token")


      if (res.token != null) {
        console.log("Your Token: ", a);
      }
      else {
        console.log("token yok: ", res.token);
      }
    }, (err: any) => {
      console.log('error: ', err)

    }
    )
  }

}


