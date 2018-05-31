import { Component, OnInit, OnDestroy } from "@angular/core";
import { IProduct } from "../../model/product.interface";
import { ProductService } from "../../services/product.service";
import { OrderService } from "../../services/order.service";
import { UserService } from "../../services/user.service";
import { IUser } from "../../model/user.interface";
import { ToastSerice } from "../shared/toast/toast.service";
import { Router } from "@angular/router";

@Component({
    selector: 'pages-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

    products: IProduct[] = [];

    view: Number = 3;

    currentUser: IUser = undefined;

    constructor(private _product: ProductService, private _order: OrderService,
        private _user: UserService, private _toasts: ToastSerice, private _router: Router) {

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
        if (this._user.getCurrentUser() === undefined) {
            this._toasts.addErrorToast("You need to be logged in!");
            this._router.navigate(['/auth/login']);
            return;
        } else {
            this._order.addToProducts(product);
            this._user.login({
                username: this._user.getCurrentUser().username,
                password: this._user.getCurrentUser().password
            }, true);
            this.currentUser = this._user.getCurrentUser();
            this._user.clearCurrentUser();
            this._user.login({
                username: this.currentUser.username,
                password: this.currentUser.password
            }, true);
        }
    }

}