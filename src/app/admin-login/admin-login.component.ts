import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  username=""
  password=""
constructor(private route:Router){}
  readValue=()=>{
let data:any={"username":this.username,"password":this.password}
if (this.username=="admin"&&this.password=="123") {

  this.route.navigate(['/add'])
} else {
  alert("invalid username or password")
}
  }

 

}
