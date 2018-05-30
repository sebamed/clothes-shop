import { Component, OnInit, OnDestroy } from "@angular/core";
import { IProduct } from "../../model/product.interface";
import { ProductService } from "../../services/product.service";
import { OrderService } from "../../services/order.service";
import { UserService } from "../../services/user.service";

@Component({
    selector: 'pages-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

    products: IProduct[] = [];

    view: Number = 3;

    constructor(private _product: ProductService, private _order: OrderService,
        private _user: UserService) {

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

    updateOrder(product: IProduct) {
        this._order.addToProducts(product);
        this._user.login({
            username: this._user.getCurrentUser().username,
            password: this._user.getCurrentUser().password
        }, true);
    }

}