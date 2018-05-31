import { Component, OnDestroy, OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";
import { IUser } from "../../model/user.interface";
import { IOrder } from "../../model/order.interface";
import { IProduct } from "../../model/product.interface";
import { OrderService } from "../../services/order.service";
import { Router } from "@angular/router";

@Component({
    selector: 'user-myproducts',
    templateUrl: './my-products.component.html',
    styleUrls: ['./my-products.component.scss']
})
export class MyProductsComponent implements OnInit, OnDestroy {

    currentUser: IUser = undefined;

    order: IOrder = undefined;

    sum: any = 0;

    desc: String = "";

    constructor(private _user: UserService, private _order: OrderService, private _router: Router){

    }



    ngOnInit() {
        this.setCurrentUser();
        this.setOrder();
        this.getSum();
        console.log('suma:');
        console.log(this.sum);
        console.log(this.order);
    }

    ngOnDestroy() {

    }

    setCurrentUser(){
        this.currentUser = this._user.getCurrentUser();
    }

    setOrder(){
        this.order = this.currentUser.order;
    }

    removeProduct(product: IProduct){
        this._order.removeProduct(product);
        this.setCurrentUser();
        this.order = this.currentUser.order;
        this.sum = 0;
        this.getSum();
        this._user.login({
            username: this.currentUser.username,
            password: this.currentUser.password
        }, true);
    }

    getSum(){
        for(let i = 0; i < this.order.products.length; i++){
            this.sum += <number>this.order.products[i].priceMain - (<number>this.order.products[i].priceMain*(<number>this.order.products[i].discount/100));
            this.sum += <number>this.order.products[i].priceDecimal;
        }
    }

    checkout(){
        this.order.checkout = true;
        this.order.description = this.desc;
        this._order.checkout(this.order);
        this._user.login({
            username: this.currentUser.username,
            password: this.currentUser.password
        }, true);
        this.order = this._user.getCurrentUser().order;
        // TOAST
        this._router.navigate(['/products/all']);
    }
}