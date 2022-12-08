import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent {
constructor(private api:ApiService){}
  empcode=""
  SearchData:any=[]
readValue=()=>{
  let data:any={
    "empcode":this.empcode
    
}
console.log(data)
this.api.searchData(data).subscribe(
  (response:any)=>{
    console.log(response)

    if (response.length==0) {
      alert("Invalid Employee code")
      
    } else {
      this.SearchData=response;
    }
  }
)
}

deleteBtnClick =(id:any)=>
{
  let data:any={"id":id}
  this.api.deleteData(data).subscribe(
    (response:any)=>{
      console.log(response)
      if (response.status=="success") {
        alert("Deleted")
        
      } else {
        alert("Something went wrong")
      }
    }
  )
}
}
