import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url:any = 'http://127.0.0.1:8000/api/login'
  urls:any = 'http://127.0.0.1:8000/api/getuser'
  constructor(private http:HttpClient) { }
  loginuser(credentials:any):Observable<any>{
    return this.http.post(this.url,credentials)
  }


  getuser(token:any):Observable<any>{
    return this.http.post(this.urls, token)
  }
}
// +254705287224