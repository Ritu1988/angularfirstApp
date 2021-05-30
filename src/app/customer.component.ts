import { group } from '@angular/animations';
import { Component } from '@angular/core';
import { FormBuilder,FormGroup,FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer',
  template:`
 <form [formGroup]="myGroup" (ngSubmit)="CustomerRegister(myGroup.value)" >
 <div>
 <label>Customer Code</label>
 <input type ="text" formControlName="customerCode" required />
 
 </div>
 <div>
 <input type="submit" value ="Submit" />
 </div>

 </form>
  `
 
})
export class CustomerComponent {
    myGroup:FormGroup;
    
 constructor(private myBuilder:FormBuilder, private mynavigation:Router)
 {
this.myGroup=this.myBuilder.group({
    customerCode: new FormControl('',Validators.required),
    customerName: new FormControl(''),
    customerAge: new FormControl('')   
});
 
 }
 CustomerRegister(temp:any)
 {

    console.log(temp);
    this.mynavigation.navigate(['employeeDetails']);
 }
}