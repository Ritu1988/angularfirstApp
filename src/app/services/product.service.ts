import { Product  } from '../Models/product'

export class ProductService
{
    public  GetProducts(){
        let products:Product[] ;   
        products = [
                new Product(1,'Memory Card',500),
                new Product(2,'Data Card',400),
                new Product(3,'RAM',100)
        ];
        return products;
    }
}
