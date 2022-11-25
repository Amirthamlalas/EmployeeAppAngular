import { Component } from '@angular/core';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent {
  data :any = [
    {
        "name" : "Amirtha",
        "Designation" : "Software Engineer Trainee",
        "Phone"  : 1532626,
        "Salary" : 144355
    },
    {
        "name" : "Anju",
        "Designation" : "Software Engineer Trainee",
        "Phone"  : 76465568,
        "Salary" : 358685
    },
    {
        "name" : "Sherin",
        "Designation" : "Software Engineer Trainee",
        "Phone"  : 2542526,
        "Salary" : 25265
    },
    {
            "name" : "Switlana",
            "Designation" : "Software Engineer Trainee",
            "Phone"  : 2252626,
            "Salary" : 466355
    },
    {
            "name" : "Hazna",
            "Designation" : "Software Engineer Trainee",
            "Phone"  : 1532626,
            "Salary" : 132567
    }

]
}
