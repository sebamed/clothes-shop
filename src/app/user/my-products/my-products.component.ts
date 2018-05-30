import { Component, OnDestroy, OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";
import { IUser } from "../../model/user.interface";
import { IOrder } from "../../model/order.interface";

@Component({
    selector: 'user-myproducts',
    templateUrl: './my-products.component.html',
    styleUrls: ['./my-products.component.scss']
})
export class MyProductsComponent implements OnInit, OnDestroy {

    currentUser: IUser = undefined;

    order: IOrder = undefined;

    constructor(private _user: UserService){

    }



    ngOnInit() {
        this.setCurrentUser();
        this.showOrder();
        console.log(this.order);
    }

    ngOnDestroy() {

    }

    setCurrentUser(){
        this.currentUser = this._user.getCurrentUser();
    }

    showOrder(){
        this.order = this.currentUser.order;
    }
}