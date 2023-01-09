import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiServiceService {

  constructor(private _http: HttpClient) { }

  // connect front to back
  apiUrlGetActors = "http://localhost:4000/api/actors/get"
  apiUrlPostActors = "http://localhost:4000/api/actors/post"
  apiUrlDeleteActors = "http://localhost:4000/api/actors/delete"
  apiUrlUpdateActors = "http://localhost:4000/api/actors/put"
  apiUrlGetSingleDataActors = "http://localhost:4000/api/actors/get"


  apiUrlGetDrawers = "http://localhost:4000/api/drawers/get"
  apiUrlPostDrawers = "http://localhost:4000/api/drawers/post"
  apiUrlDeleteDrawers = "http://localhost:4000/api/drawers/delete"
  apiUrlUpdateDrawers = "http://localhost:4000/api/drawers/put"
  apiUrlGetSingleDataDrawers = "http://localhost:4000/api/drawers/get"


  apiUrlGetWriters = "http://localhost:4000/api/writers/get"
  apiUrlPostWriters = "http://localhost:4000/api/writers/post"
  apiUrlDeleteWriters = "http://localhost:4000/api/writers/delete"
  apiUrlUpdateWriters = "http://localhost:4000/api/writers/put"
  apiUrlGetSingleDataWriters = "http://localhost:4000/api/writers/get"


  token = localStorage.getItem("token");

  // ACTORS@@@
  // GET
  getAllDataActors(): Observable<any> {

    let options = {
      headers: {
        "x-access-token": this.token
      }
    }

    return this._http.get(this.apiUrlGetActors, options);
  }
  //  CREATE , POST
  createDataActors(data: any): Observable<any> {

    let options = {
      headers: {
        "x-access-token": this.token
      }
    }

    return this._http.post(this.apiUrlPostActors, data, options)
  }
  // DELETE
  deleteDataActors(id: any) : Observable<any> {

    let ids = id;

    let options = {
      headers: {
        "x-access-token": this.token
      }
    }
    return this._http.delete(this.apiUrlDeleteActors + "/" + ids, options)

  }
  // UPDATE , PUT
  updateDataActors(data: any, id: any): Observable<any> {
    let ids = id;
    let options = {
      headers: {
        "x-access-token": this.token
      }

    }
    return this._http.put(this.apiUrlUpdateActors + "/" + ids, data, options)
  }
  // GET SINGLE DATA
  getSingleDataActors(id: any): Observable<any> {
    let ids = id;
    let options = {
      headers: {
        "x-access-token": this.token
      }
    }
    return this._http.get(this.apiUrlGetSingleDataActors + "/" + ids, options)

  }




  // DRAWERS@@@
  // GET
  getAllDataDrawers(): Observable<any> {

    let options = {
      headers: {
        "x-access-token": this.token
      }
    }

    return this._http.get(this.apiUrlGetDrawers, options);
  }
  //  POST
  createDataDrawers(data: any): Observable<any> {

    let options = {
      headers: {
        "x-access-token": this.token
      }
    }

    return this._http.post(this.apiUrlPostDrawers, data, options)
  }
  // DELETE
  deleteDataDrawers(id: any): Observable<any> {

    let ids = id;

    let options = {
      headers: {
        "x-access-token": this.token
      }
    }

    return this._http.delete(this.apiUrlDeleteDrawers + "/" + ids, options)
  }
  // UPDATE , PUT
  updateDataDrawers(data: any, id: any): Observable<any> {
    let ids = id;
    let options = {
      headers: {
        "x-access-token": this.token
      }
    }
    return this._http.put(this.apiUrlUpdateDrawers + "/" + ids, data, options)
  }
  // GET SINGLE DATA
  getSingleDataDrawers(id: any): Observable<any> {
    let ids = id;
    let options = {
      headers: {
        "x-access-token": this.token
      }
    }
    return this._http.get(this.apiUrlGetSingleDataDrawers + "/" + ids, options)

  }




  // WRITERS@@@
  // GET
  getAllDataWriters(): Observable<any> {

    let options = {
      headers: {
        "x-access-token": this.token
      }
    }

    return this._http.get(this.apiUrlGetWriters, options);
  }
  //  POST
  createDataWriters(data: any): Observable<any> {

    let options = {
      headers: {
        "x-access-token": this.token
      }
    }

    return this._http.post(this.apiUrlPostWriters, data, options)
  }
  // DELETE
  deleteDataWriters(id: any): Observable<any> {

    let ids = id;

    let options = {
      headers: {
        "x-access-token": this.token
      }
    }

    return this._http.delete(this.apiUrlDeleteWriters + "/" + ids, options)
  }
  // UPDATE , PUT
  updateDataWriters(data: any, id: any): Observable<any> {
    let ids = id;
    let options = {
      headers: {
        "x-access-token": this.token
      }
    }
    return this._http.put(this.apiUrlUpdateWriters + "/" + ids, data, options)
  }
  // GET SINGLE DATA
  getSingleDataWriters(id: any): Observable<any> {
    let ids = id;
    let options = {
      headers: {
        "x-access-token": this.token
      }
    }
    return this._http.get(this.apiUrlGetSingleDataWriters + "/" + ids, options)

  }


}
