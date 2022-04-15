import { Component, OnInit } from '@angular/core';
import { SignupService } from '../services/signup.service';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username:any = ''
  phonenumber:any = ''
  userimage:any = ''
  password:any = ''
  error:any = ''
  success:any = ''
  // login
  phonenumbers:any = ''
  passwords:any = ''
  constructor(private SignupService:SignupService, private LoginService:LoginService) { }

  ngOnInit(): void {
  }
  signupuser(){
    if(this.username != '' || this.phonenumber != '' || this.userimage != '' || this.password != ''){
      let credentials = {
            'username':this.username,
            'phonenumber':this.phonenumber,
            'userimage':this.userimage,
            'password':this.password
      }
      this.SignupService.signup(credentials).subscribe((data) =>{
        if(data == 'user with this email already exist'){
          this.success = ''
          this.error = data
        }else{
          this.success = 'details added successfully.'
          this.error = ''
        }
        console.log(data)
      })
      }else{
        this.success = ''
        this.error = 'please fill all the required details.'
      }
  }

  loginuser(){
    if(this.phonenumbers != '' || this.passwords != ''){
      let credentials = {
        'phonenumber':this.phonenumbers,
        'password':this.passwords
      }
    }
  }
}
