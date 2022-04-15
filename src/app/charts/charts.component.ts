import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { ContactService } from '../services/contact.service';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  displays:any = 'none'
  user:any
  // details contact
  username:any = ''
  phonenumber:any = ''
  error = ''
  constructor(private ContactService:ContactService, private LoginService:LoginService, private CookieService:CookieService, private router:Router) { }

  ngOnInit(): void {
    this.getuser()
  }
  displayaddcontact(){
   if(this.displays == "none"){
    this.displays = "block"
   }else{
    this.displays = "none"
   }
  }
  getuser(){
     let cookie = this.CookieService.get("jwt")
     if(cookie){
       let token = {
         'jwt':cookie
       }
        this.LoginService.getuser(token).subscribe((data) =>{
         this.user = data
        } )
     }else{
       this.router.navigate(['/account'])
     }
  }
  savecontact(){
    if(this.username != '' || this.phonenumber != ''){
      let details = {
        'user':this.user,
        'username':this.username,
        'phonenumber':this.phonenumber
      }
      this.ContactService.savecontact(details).subscribe((data) => {
        console.log(data)
      })
    }else{
      this.error = 'please fill the required fields.'
    }
  }
}
