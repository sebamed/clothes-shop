import { Component, OnInit, OnDestroy } from "@angular/core";
import { curr } from './currencies';
import { IProduct } from "../../../model/product.interface";
import { IProductDTO } from "../../../model/dto/product.dto";
import { UserService } from "../../../services/user.service";
import { ProductService } from "../../../services/product.service";
import { CategoryService } from "../../../services/category.service";
import { ICategory } from "../../../model/category.interface";
import { Router } from "@angular/router";

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

    selectedImage: File;
    selectedImageUrl: String = '';

    product: IProductDTO = {
        title: undefined,
        description: undefined,
        priceMain: undefined,
        priceDecimal: undefined,
        discount: undefined,
        currency: undefined,
        admin: {},
        isPublic: false,
        category: undefined
    }

    allCurrencies;

    categories: ICategory[] = [];

    constructor(private _user: UserService,
        private _product: ProductService,
        private _category: CategoryService,
    private _router: Router) {

    }

    ngOnInit() {
        this.product.isPublic = false;
        this.allCurrencies = curr;
        this.setCategories();
        this.product.currency = this.allCurrencies[0];
    }

    ngOnDestroy() {

    }

    setCurrency(value) {
        this.product.currency = value;
    }

    addNew() {
        // todo:
        // post request nakon provere polja
        if (this.checkFields()) {
            // popunjeno
            this.product.admin = this._user.getCurrentUser();
            console.log(this.product);
            // dodaj da ide na njegovu stranicu
            this._product.addProduct(this.product, this.selectedImage);
            this._router.navigate(['/admin/products/all']);
            // poruka!
        } else {
            // dodaj toast
            console.log("ne moze");
        }
    }

    checkFields(): boolean {
        for (var key in this.product) {
            if (this.product[key] == null || this.product[key] === '' || this.product[key] === undefined) {
                return false;
            }
        }
        if (this.selectedImage === undefined) return false;
        return true;
    }

    togglePublish() {
        this.product.isPublic = !this.product.isPublic;
    }

    onFileChanged(event) {
        if (event.target.files && event.target.files[0]) {
            this.selectedImage = event.target.files[0];
            var reader = new FileReader();

            reader.onload = (event: any) => {
                this.selectedImageUrl = event.target.result;
            }
            reader.readAsDataURL(event.target.files[0]);
        }
    }

    setCategories(){
        this._category.getAllCategories().subscribe((res: ICategory[]) => {
            this.categories = res;
        });
    }

    setCategory(value){
        this.product.category = value;
    }

}