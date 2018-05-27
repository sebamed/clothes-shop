import { Injectable } from "@angular/core";
import { HttpRequest, HttpClient, HttpResponse } from '@angular/common/http';
import { ICategory } from "../model/category.interface";

@Injectable()
export class CategoryService {

    constructor(private _http: HttpClient) {

    }

    rootUrl: String = "http://localhost:8080/api/categories/";

    getAllCategories() {
        return this._http.get(this.rootUrl.toString()).map(res => <ICategory[]>res);
    }

    addCategory(category: ICategory){
        const body = JSON.stringify(category);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const req = new HttpRequest('POST', this.rootUrl + 'add', body );
        return this._http.request(req).subscribe((response: HttpResponse<any>) => {
            console.log(response.body);
        });
    }

    getCategory(id: Number){
        return this._http.get(this.rootUrl + id.toString()).subscribe((res: ICategory) => {
            console.log(res);
        });
    }
}