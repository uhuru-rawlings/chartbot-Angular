import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  displays:any = 'none'
  constructor(private LoginService:LoginService, private CookieService:CookieService, private router:Router) { }

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
        this.LoginService.getuser(cookie).subscribe((data) =>{
          console.log(data)
        } )
     }else{
       this.router.navigate(['/account'])
     }
  }

}
