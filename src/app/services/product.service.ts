import { Injectable } from "@angular/core";
import { HttpRequest, HttpClient, HttpResponse } from '@angular/common/http';
import { IProductDTO } from "../model/dto/product.dto";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { IProduct } from "../model/product.interface";


@Injectable()
export class ProductService {

    rootUrl: String = 'http://localhost:8080/api/products/';

    constructor(private _http: HttpClient) {

    }

    addProduct(productDTO: IProductDTO, file: File) {
        const headers = new Headers({ 'Content-Type': null });
        headers.set('Accept', "multipart/form-data");
        headers.append('Content-Type', null);

        let formdata: FormData = new FormData();

        formdata.append('productDto', JSON.stringify(productDTO));
        formdata.append('file', file);

        const req = new HttpRequest('POST', this.rootUrl + 'add', formdata);

        return this._http.request(req).subscribe((response: HttpResponse<any>) => {
            // ide na njegovu stranicu???
            console.log(response.body);
        });
    }

    getProduct(id: Number){
        return this._http.get(this.rootUrl + id.toString()).subscribe((res: IProduct) => {
            console.log(res);
        });
    }

}