import { Component, OnInit, OnDestroy } from "@angular/core";
import { IProduct } from "../../model/product.interface";
import { ProductService } from "../../services/product.service";
import { ToastSerice } from "../../pages/shared/toast/toast.service";
import { ToastTitle } from "../../model/enum/toast-title.enum";
import { ToastType } from "../../model/enum/toast-type.enum";
import { ToastIcon } from "../../model/enum/toast-icon.enum";

@Component({
    selector: 'admin-products',
    templateUrl: './admin-products.component.html',
    styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit, OnDestroy {

    products: IProduct[] = [];

    selectedProducts: IProduct[] = [];

    constructor(private _product: ProductService, private _toasts: ToastSerice) {

    }

    ngOnInit() {
        this.getAllProducts();
    }



    ngOnDestroy() {

    }

    deleteProducts() {
        if (this.selectedProducts.length === 0) {
            // toast da nema selektovanih
            this._toasts.addErrorToast("No products selected!");
        } else {
            this._product.deleteProducts(this.selectedProducts);
            this.selectedProducts = [];
            this._toasts.addSuccessToast("Selected products deleted!");
            this.getAllProducts();
        }
    }

    getAllProducts() {
        this._product.getAllProducts().subscribe((res: IProduct[]) => {
            this.products = [];
            this.products = res;
        });
    }

    selectProduct(product: IProduct) {
        if (this.selectedProducts.includes(product)) {
            // postoji
            this.selectedProducts.splice(this.selectedProducts.indexOf(product));
        } else {
            this.selectedProducts.push(product);
        }
        console.log(this.selectedProducts);
    }

}