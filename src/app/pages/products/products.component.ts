import { Component, OnInit, OnDestroy } from "@angular/core";
import { IProduct } from "../../model/product.interface";
import { ProductService } from "../../services/product.service";
import { OrderService } from "../../services/order.service";

@Component({
    selector: 'pages-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

    products: IProduct[] = [];

    view: Number = 3;

    constructor(private _product: ProductService, private _order: OrderService) {

    }

    ngOnInit() {
        this.setAllProducts();
    }

    ngOnDestroy() {

    }

    setAllProducts() {
        this._product.getAllProducts().subscribe(res => {
            this.products = res;
        });
    }

    onChange(e) {
        this.view = e;
    }

    updateOrder(product: IProduct){
        this._order.addToProducts(product);
    }

}