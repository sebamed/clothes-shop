import { Component, OnInit, OnDestroy } from "@angular/core";
import { IProduct } from "../../model/product.interface";
import { ProductService } from "../../services/product.service";

@Component({
    selector: 'pages-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

    products: IProduct[] = [];

    constructor(private _product: ProductService){

    }

    ngOnInit() {
        this.setAllProducts();
    }

    ngOnDestroy() {
        
    }

    setAllProducts(){
        this._product.getAllProducts().subscribe(res => {
            this.products = res;
        });
    }

}