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

    getAllOrders(){
        return this._http.get(this.rootUrl.toString()).map(res => res.json());
    }

    updateOrder(order: IOrder){
        const body = JSON.stringify(order);
        console.log(order);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        this._http.post(this.rootUrl + "update", body, { headers: headers }).subscribe(res => {
            console.log(res);
        });
    }

    checkout(order: IOrder){
        const body = JSON.stringify(order);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        this._http.post(this.rootUrl + "checkout", body, { headers: headers }).subscribe(res => {
            console.log(res);
        });
    }

    setDelivered(order: IOrder){
        const body = JSON.stringify(order);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        this._http.post(this.rootUrl + "deliver", body, { headers: headers }).subscribe(res => {
            console.log(res);
        });
    }

    removeProduct(product: IProduct){
        this.getCurrentUser();
        this.currentUser.order.products.splice(this.currentUser.order.products.indexOf(product), 1);
        this.updateOrder(this.currentUser.order);
    }

    addToProducts(product: IProduct){
        this.getCurrentUser();
        this.currentUser.order.products.push(product);
        this.updateOrder(this.currentUser.order);
    }

    getCurrentUser(){
        this.currentUser = this._user.getCurrentUser();
    }

}