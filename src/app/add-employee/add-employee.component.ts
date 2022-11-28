import { Component } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  name=""
  Designation=""
  Phone=""
  Salary=""


  readValue = ()=>
  {
    let data : any ={
      "name" : this.name,
      "Designation" : this.Designation,
      "Phone"  : this.Phone,
      "Salary" : this.Salary
      
  }
  console.log(data)
  }
}
