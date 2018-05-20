import { Component, OnInit, OnDestroy } from "@angular/core";
import { curr } from './currencies';

@Component({
    selector: 'admin-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit, OnDestroy {

    // todo:
    // dodaj model produkta i stavi
    // da su propertiji i ovde ispod i u html-u njegovi

    allCurrencies;

    title: String;
    desc: String;
    price: Number;
    decimal: Number;
    currency: String;
    discount: Number;

    ngOnInit() {
        this.allCurrencies = curr;
    }

    ngOnDestroy() {

    }

    setCurrency(value){
        this.currency = value;
    }

}