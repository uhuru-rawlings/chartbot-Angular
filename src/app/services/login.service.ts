import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url:any = 'http://127.0.0.1:8000/api/login'
  constructor(private http:HttpClient) { }
  loginuser(credentials:any):Observable<any>{
    return this.http.post(this.url,credentials)
  }
}
