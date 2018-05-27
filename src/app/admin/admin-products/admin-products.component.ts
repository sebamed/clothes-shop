import { Component, OnInit, OnDestroy } from "@angular/core";
import { IProduct } from "../../model/product.interface";
import { ProductService } from "../../services/product.service";

@Component({
    selector: 'admin-products',
    templateUrl: './admin-products.component.html',
    styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit, OnDestroy {

    products: IProduct[] = [];

    constructor(private _product: ProductService){

    }

    ngOnInit() {
        this.getAllProducts();
    }

    ngOnDestroy() {

    }

    getAllProducts(){
        this._product.getAllProducts().subscribe((res: IProduct[]) => {
            this.products = res;
        });
    }

}