import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { IService } from "../admin/model/service.interface";

@Injectable()
export class ServicesService {

    servicesList: IService[] = [];

    constructor(private _http: Http) {

    }

    getAllServices() {
        return this._http.get('http://localhost:8080/api/services/').map(res => <IService[]>res.json());
    }

}