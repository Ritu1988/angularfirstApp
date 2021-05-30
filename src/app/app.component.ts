import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <h1>Ritu</h1>
  <a routerLink='customer'>Customer Details</a>
  <router-outlet></router-outlet>
  `
 
})
export class AppComponent {
  title = 'angFirst';
 
 
}
