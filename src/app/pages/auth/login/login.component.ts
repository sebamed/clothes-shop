import { Component, OnInit, OnDestroy } from "@angular/core";
import { IUserLoginDTO } from "../../../model/dto/userLogin.dto";
import { UserService } from "../../../services/user.service";
import { IUser } from "../../../model/user.interface";
import { Location } from "@angular/common";
import { Router } from "@angular/router";
import { ToastSerice } from "../../shared/toast/toast.service";
import { ToastType } from "../../../model/enum/toast-type.enum";
import { ToastIcon } from "../../../model/enum/toast-icon.enum";
import { ToastTitle } from "../../../model/enum/toast-title.enum";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

    keepMeLoggedIn: boolean = false;

    userLoginDTO: IUserLoginDTO = {
        password: '',
        username: ''
    };

    constructor(private _user: UserService,
        private _location: Location,
        private _router: Router,
        private _toasts: ToastSerice) {

    }

    ngOnInit() {
        this.checkCurrentUser();
    }

    ngOnDestroy() {

    }

    checkCurrentUser() {
        if (this._user.getCurrentUser() != undefined) {
            // dodaj message da izidje da je vec ulogovan
            this._toasts.addWarningToast("You are already signed in!");
            this._router.navigate(['/home']);
        }
    }

    toggleKeep() {
        this.keepMeLoggedIn = !this.keepMeLoggedIn;
    }

    login() {
        if (this.checkFields()) {
            if (this._user.login(this.userLoginDTO, this.keepMeLoggedIn) != null) {
                this._toasts.addSuccessToast("You are successfully logged in!");
                this._router.navigate(['/home']);
                // change route with logged user
            } else {
                this._toasts.addErrorToast("You entered incorrect password or username!");
            }
        }
        else {
            // posalji poruku da nije uneo
            this._toasts.addErrorToast("You need to fill in all fields!");
        }
    }

    checkFields(): boolean {
        for (var key in this.userLoginDTO) {
            if (this.userLoginDTO[key] == null || this.userLoginDTO[key] === '') {
                return false;
            }
        }
        return true;
    }

    goToRegistration() {
        this._router.navigate(['/auth/registration']);
    }

}