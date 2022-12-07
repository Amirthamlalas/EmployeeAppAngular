import { Component } from '@angular/core';

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
  }
}
