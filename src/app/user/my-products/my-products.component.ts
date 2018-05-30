import { Component, OnDestroy, OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";
import { IUser } from "../../model/user.interface";
import { IOrder } from "../../model/order.interface";
import { IProduct } from "../../model/product.interface";
import { OrderService } from "../../services/order.service";

@Component({
    selector: 'user-myproducts',
    templateUrl: './my-products.component.html',
    styleUrls: ['./my-products.component.scss']
})
export class MyProductsComponent implements OnInit, OnDestroy {

    currentUser: IUser = undefined;

    order: IOrder = undefined;

    sum: any = 0;

    constructor(private _user: UserService, private _order: OrderService){

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
    }

    getSum(){
        for(let i = 0; i < this.order.products.length; i++){
            this.sum += <number>this.order.products[i].priceMain - (<number>this.order.products[i].priceMain*(<number>this.order.products[i].discount/100));
            this.sum += <number>this.order.products[i].priceDecimal;
        }
    }
}