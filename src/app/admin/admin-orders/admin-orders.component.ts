import { Component, OnInit, OnDestroy } from "@angular/core";
import { IOrder } from "../../model/order.interface";
import { OrderService } from "../../services/order.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { OrderModalComponent } from "./order-modal/order-modal.component";

@Component({
    selector: 'admin-orders',
    templateUrl: './admin-orders.component.html',
    styleUrls: ['./admin-orders.component.scss']
})
export class AdminOrdersComponent implements OnInit, OnDestroy {

    orders: IOrder[] = [];
    allOrders: IOrder[] = [];

    constructor(private _order: OrderService, private _modal: NgbModal) {

    }

    ngOnInit() {
        this.setOrders();
    }

    ngOnDestroy() {

    }

    openOrderModal(order: IOrder) {
        const typesModalRef = this._modal.open(OrderModalComponent,{ size: 'lg', backdrop: 'static' });
        typesModalRef.componentInstance.currentOrder = order;
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