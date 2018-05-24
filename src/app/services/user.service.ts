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

    currentUser: IUser;

    currentUserUpdated: EventEmitter<any> = new EventEmitter();

    constructor(private _http: Http) {

    }

    login(userLoginDTO: IUserLoginDTO, keep: boolean) {
        const body = JSON.stringify(userLoginDTO);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this.rootUrl + "login", body, { headers: headers }).map(res => res.json()).subscribe((response: Response) => {
            this.setCurrentUser(response);
            console.log("stavio current u servisu");
            console.log(this.currentUser);
            return this.currentUser;
        },
            error => {
                if (error.status === 400) {
                    return null;
                }
            }, () => {
                this.currentUserUpdated.emit();
                if(keep){
                    localStorage.setItem("currentUser", JSON.stringify(this.getCurrentUser()));
                }
                console.log("zavrsion");
            }
        );
    }

    getCurrentUser() {
        return this.currentUser;
    }

    setCurrentUser(response) {
        this.currentUser = {
            id: response.id,
            username: response.username,
            email: response.email,
            firstName: response.firstName,
            lastName: response.lastName,
            password: response.password,
            role: response.role
        };
        this.currentUserUpdated.emit();
    }

    clearCurrentUser() {
        this.currentUser = undefined;
        if (localStorage.getItem("currentUser") != null) {
            localStorage.clear();
        }
        this.currentUserUpdated.emit();
    }
}