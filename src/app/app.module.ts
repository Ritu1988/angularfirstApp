import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer.component';
import { EmployeedetailsComponent } from './employeedetails.component';
import {ProductlistComponent } from './productlist/productlist.component';
import {ProductdetailComponent} from './productdetails/productdetails.component';
const myRoutes:Routes=[{path:'customer', component:CustomerComponent},
{path:'employeeDetails', component:EmployeedetailsComponent},
{path:'productList', component:ProductlistComponent},
{path:'productList/:id', component:ProductdetailComponent}
]
;

@NgModule({
  declarations: [
    AppComponent,CustomerComponent, EmployeedetailsComponent,ProductlistComponent,
    ProductdetailComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,FormsModule,RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
