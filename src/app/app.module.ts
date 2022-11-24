import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';

const myRoute : Routes=[

  {
    path : "",
    component : AdminLoginComponent
  },
  {
    path : "login",
    component : AddEmployeeComponent
  },
  {
    path : "add",
    component : AddEmployeeComponent
  },
  {
    path : "search",
    component : SearchEmployeeComponent
  },
  {
    path : "delete",
    component : DeleteEmployeeComponent
  },
]
@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AddEmployeeComponent,
    NavbarComponent,
    SearchEmployeeComponent,
    DeleteEmployeeComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
