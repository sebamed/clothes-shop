import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { IOrder } from "../model/order.interface";
import { IProduct } from "../model/product.interface";
import { UserService } from "./user.service";
import { IUser } from "../model/user.interface";

@Injectable()
export class OrderService {

    rootUrl: String = "http://localhost:8080/api/orders/";

    currentUser: IUser = undefined;
    currentProducts: IProduct[] = [];

    constructor(private _http: Http, private _user: UserService){

    }

    updateOrder(order: IOrder){
        const body = JSON.stringify(order);
        console.log(order);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        this._http.post(this.rootUrl + "update", body, { headers: headers }).subscribe(res => {
            console.log(res);
        });
    }

    addToProducts(product: IProduct){
        this.getCurrentUser();
        console.log(this.currentUser.order);
        this.currentUser.order.products.push(product);
        this.updateOrder(this.currentUser.order);
    }

    getCurrentUser(){
        this.currentUser = this._user.getCurrentUser();
    }

}