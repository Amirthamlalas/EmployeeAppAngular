import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  empcode=""
  empname=""
  designation=""
  mobileno=""
  salary=""
  companyName=""
  username=""
  password=""
constructor(private api:ApiService){}
  readValue = ()=>
  {
    let data : any ={"empcode":this.empcode,
      "empname" : this.empname,
      "designation" : this.designation,
      "mobileno"  : this.mobileno,
      "salary" : this.salary,
      "companyName":this.companyName,
      "username":this.username,
      "password":this.password

      
  }
  console.log(data)

  this.api.addCourse(data).subscribe(
    (response:any)=>{
      console.log(response)
      if (response.status="success") {
        alert("employee added successfully")
        this.empcode=""
          this.empname=""
          this.designation=""
          this.mobileno=""
          this.salary=""
          this.companyName=""
          this.username=""
          this.password=""
        
      } else {
        alert("something went wrong")
      }
    }
  )
  }
}
