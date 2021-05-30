import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../Models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  providers: [ProductService] // as passing productservice from constror param,registering class so that angular will take care of memory allocation 
})
export class ProductdetailComponent {
  product:any;
  id:any;

  constructor(private _Activatedroute:ActivatedRoute,
    private _router:Router,
    private _productService:ProductService){
}
ngOnInit(){
  this.id = this._Activatedroute.snapshot.params['id'];
    let products=this._productService.GetProducts();
      this.product=products.find(p => p.productid==this.id);
  this._Activatedroute.params.subscribe((params)=>{
     console.log(params['id'])
  })
}
onBack(): void {
  this._router.navigate(['productList']);

}
}