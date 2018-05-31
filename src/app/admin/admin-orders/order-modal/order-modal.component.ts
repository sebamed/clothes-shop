import { Component, Input, OnInit, OnDestroy } from '@angular/core';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IOrder } from '../../../model/order.interface';
import { IProduct } from '../../../model/product.interface';

@Component({
    selector: 'admin-order-modal',
    templateUrl: './order-modal.component.html',
    styleUrls: ['./order-modal.component.scss']
})
export class OrderModalComponent implements OnInit, OnDestroy {

    @Input() currentOrder: IOrder;

    constructor(public activeModal: NgbActiveModal, private modalService: NgbModal) { }

    ngOnInit() {
        console.log(this.currentOrder);
    }

    ngOnDestroy() {

    }

    open() {
        const modalRef = this.modalService.open(OrderModalComponent);
    }
}