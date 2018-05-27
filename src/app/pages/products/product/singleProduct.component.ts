import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
    selector: 'pages-singleProduct',
    templateUrl: './singleProduct.component.html',
    styleUrls: ['./singleProduct.component.scss']
})
export class SingleProductComponent implements OnInit, OnDestroy {

    subRouterParams: Subscription;

    currentId: Number;

    constructor(private _activeRoute: ActivatedRoute) {

    }

    ngOnInit() {
        this.getUrlParams();
    }

    ngOnDestroy() {

    }

    getUrlParams() {
        this.subRouterParams = this._activeRoute.params.subscribe(params => {
            this.currentId = params['id'];
        });
    }

}