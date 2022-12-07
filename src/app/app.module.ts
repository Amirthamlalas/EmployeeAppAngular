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
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
  {
    path : "view",
    component : ViewEmployeeComponent
  },
  {
    path : "logout",
    component : AdminLoginComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AddEmployeeComponent,
    NavbarComponent,
    SearchEmployeeComponent,
    DeleteEmployeeComponent,
    ViewEmployeeComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
