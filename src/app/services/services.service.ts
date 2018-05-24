import { Injectable } from "@angular/core";
import { Http, Headers, Response, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { IService } from "../model/service.interface";

@Injectable()
export class ServicesService {

    servicesList: IService[] = [];

    rootUrl: String = 'http://localhost:8080/api/services/'

    constructor(private _http: Http) {

    }

    getAllServices() {
        return this._http.get(this.rootUrl.toString()).map(res => <IService[]>res.json());
    }

    saveAllServices(services: IService[]) {
        const body = JSON.stringify(services);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this.rootUrl + "update", body, { headers: headers }).map((response: Response) => response.text());
    }

}