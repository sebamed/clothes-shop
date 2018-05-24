import { Injectable } from "@angular/core";
import { IUserLoginDTO } from "../model/dto/userLogin.dto";
import { Http, Headers, Response, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { IUser } from "../model/user.interface";

@Injectable()
export class UserService {

    rootUrl: String = 'http://localhost:8080/api/users/'

    currentUser: IUser = {};

    constructor(private _http: Http) {

    }

    login(userLoginDTO: IUserLoginDTO) {
        const body = JSON.stringify(userLoginDTO);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this.rootUrl + "login", body, { headers: headers }).subscribe((response: Response) => {
            this.currentUser = <IUser>response.json();
            return this.currentUser;
        },
            error => {
                if (error.status === 400) {
                    return null;
                }
            }
        );
    }

    getCurrentUser(){
        return this.currentUser;
    }
}