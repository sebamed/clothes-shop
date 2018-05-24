import { Injectable, EventEmitter } from "@angular/core";
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

    currentUserUpdated: EventEmitter<any> = new EventEmitter();

    constructor(private _http: Http) {

    }

    login(userLoginDTO: IUserLoginDTO) {
        const body = JSON.stringify(userLoginDTO);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this.rootUrl + "login", body, { headers: headers }).map(res => res.json()).subscribe((response: Response) => {
            this.setCurrentUser(response);
            console.log("stavio current u servisu");
            return this.currentUser;
        },
            error => {
                if (error.status === 400) {
                    return null;
                }
            }
        );
    }

    getCurrentUser() {
        return this.currentUser;
    }

    setCurrentUser(response) {
        this.currentUser.id = response.id;
        this.currentUser.username = response.username;
        this.currentUser.email = response.email;
        this.currentUser.firstName = response.firstName;
        this.currentUser.lastName = response.lastName;
        this.currentUser.password = response.password;
        this.currentUser.role = response.role;
        this.currentUserUpdated.emit();
    }
}