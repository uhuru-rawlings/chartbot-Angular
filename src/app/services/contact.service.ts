import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  url:any = 'http://127.0.0.1:8000/api/addcontact'
  constructor(private http:HttpClient) { }
  savecontact(contacdet:any):Observable<any>{
    return this.http.post(this.url, contacdet)
  }
}
