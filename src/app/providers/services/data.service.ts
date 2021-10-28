import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  public isAuthed = false
  public userData :any= null
  apiMainUrl="http://localhost:3000/"

  constructor(private _http:HttpClient) { }

  register(data:any):Observable<any>{
    return this._http.post('http://localhost:3000/user/register',data)
  }
  login(user:any):Observable<any>{
    return this._http.post(`${this.apiMainUrl}user/login`, user)
  }
  profile():Observable<any>{
    return this._http.get(`${this.apiMainUrl}user/profile`)
  }
  addtocart(data:any):Observable<any>{
    return this._http.post(`${this.apiMainUrl}user/addtocart`,data)
  }
  allproducts():Observable<any>{
    return this._http.get(`${this.apiMainUrl}products/allproducts`)
  }
}
