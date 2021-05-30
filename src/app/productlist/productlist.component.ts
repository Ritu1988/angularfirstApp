import { Component } from '@angular/core';

import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  providers: [ProductService] // as passing productservice from constror param,registering class so that angular will take care of memory allocation 
})

export class ProductlistComponent {
  //; // var-class cope , let local scope
  public products:any;

  constructor(private productservice:ProductService){
  //any products;
  }

  // ngOnInit called after constructor;this topic comes under ComponentLifeCycle , 
  // similar to Page Life Cycle in asp.net
  ngOnInit(){
    this.products = this.productservice.GetProducts();

  }
}
