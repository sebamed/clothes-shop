import { Injectable, EventEmitter } from "@angular/core";
import { IUserLoginDTO } from "../model/dto/userLogin.dto";
import { Http, Headers, Response, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { IUser } from "../model/user.interface";
import { IUserRegisterDTO } from "../model/dto/userRegister.dto";

@Injectable()
export class UserService {

    rootUrl: String = 'http://localhost:8080/api/users/';

    currentUser: IUser = undefined;

    currentUserUpdated: EventEmitter<any> = new EventEmitter();

    constructor(private _http: Http) {

    }

    deleteUsers(users: IUser[]) {
        const body = JSON.stringify(users);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this.rootUrl + "delete", body, { headers: headers }).subscribe(res => {
            console.log(res);
        });
    }

    getAllUsers() {
        return this._http.get(this.rootUrl.toString()).map(res => res.json());
    }

    updateUserRole(user: IUser) {
        const body = JSON.stringify(user);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this.rootUrl + "update-role", body, { headers: headers }).subscribe(res => {
            console.log(res);
        });
    }

    login(userLoginDTO: IUserLoginDTO, keep: boolean) {
        const body = JSON.stringify(userLoginDTO);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        this._http.post(this.rootUrl + 'login', body, { headers: headers }).map(res => res.json()).subscribe((response: Response) => {
            this.setCurrentUser(response);
            console.log("stavio current u servisu");
            console.log(this.currentUser);
        },
            error => {
                    return false;
            }, () => {
                this.currentUserUpdated.emit();
                localStorage.clear();
                localStorage.setItem("currentUser", JSON.stringify(this.getCurrentUser()));
                console.log("zavrsion");
            }
        );
        return true;
    }

    register(userRegisterDTO: IUserRegisterDTO) {
        const body = JSON.stringify(userRegisterDTO);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this.rootUrl + 'register', body, { headers: headers }).map(res => res.json()).subscribe((response: Response) => {
            console.log("successful registration");
            return response;
        },
            error => {
                if (error.status === 400) {
                    return null;
                }
            }, () => {
                console.log("reg finished");
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
            role: response.role,
            order: response.order
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