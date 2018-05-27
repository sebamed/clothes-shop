import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { ProductService } from "../../../services/product.service";

@Component({
    selector: 'pages-singleProduct',
    templateUrl: './singleProduct.component.html',
    styleUrls: ['./singleProduct.component.scss']
})
export class SingleProductComponent implements OnInit, OnDestroy {

    subRouterParams: Subscription;

    currentId: Number;

    constructor(private _activeRoute: ActivatedRoute,
                private _product: ProductService) {

    }

    ngOnInit() {
        this.getUrlParams();
        this._product.getProduct(this.currentId);
    }

    ngOnDestroy() {

    }

    getUrlParams() {
        this.subRouterParams = this._activeRoute.params.subscribe(params => {
            this.currentId = params['id'];
        });
    }

}