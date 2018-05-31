import { Component, OnInit, OnDestroy } from "@angular/core";
import { IOrder } from "../../model/order.interface";
import { OrderService } from "../../services/order.service";

@Component({
    selector: 'admin-orders',
    templateUrl: './admin-orders.component.html',
    styleUrls: ['./admin-orders.component.scss']
})
export class AdminOrdersComponent implements OnInit, OnDestroy {

    orders: IOrder[] = [];
    allOrders: IOrder[] = [];

    constructor(private _order: OrderService) {

    }

    ngOnInit() {
        this.setOrders();
    }

    ngOnDestroy() {

    }

    setOrders() {
        this._order.getAllOrders().subscribe((res: IOrder[]) => {
            this.allOrders = res;
            console.log(this.orders);
        }, error => {
            console.log(error);
        }, () => {
            for (let i = 0; i < this.allOrders.length; i++) {
                if (this.allOrders[i].checkout) {
                    this.orders.push(this.allOrders[i]);
                }
            }
        });
    }

    setDelivered(order: IOrder){
        order.delivered = true;
        this._order.setDelivered(order);
        this.orders = [];
        this.allOrders = [];
        this.setOrders();
    }

}