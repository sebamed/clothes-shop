import { Component, OnInit, OnDestroy } from "@angular/core";
import { curr } from './currencies';
import { IProduct } from "../../../model/product.interface";

declare var $: any;

@Component({
    selector: 'admin-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit, OnDestroy {

    // todo:
    // dodaj model produkta i stavi
    // da su propertiji i ovde ispod i u html-u njegovi

    product: IProduct = {

    }

    allCurrencies;

    ngOnInit() {
        this.product.isPublic = false;
        this.allCurrencies = curr;
    }

    ngOnDestroy() {

    }

    setCurrency(value) {
        this.product.currency = value;
    }

    addNew() {
        // todo:
        // post request nakon provere polja
    }

    togglePublish() {
        this.product.isPublic = !this.product.isPublic;
    }

}