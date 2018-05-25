import { Component, OnInit, OnDestroy } from "@angular/core";
import { IUserRegisterDTO } from "../../../model/dto/userRegister.dto";
import { UserService } from "../../../services/user.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

    userRegisterDTO: IUserRegisterDTO = {
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        username: ''
    };

    constructor(private _user: UserService, private _router: Router) {

    }

    ngOnInit() {
        this.checkCurrentUser();
    }

    ngOnDestroy() {

    }

    checkCurrentUser() {
        if (this._user.getCurrentUser() != undefined) {
            // dodaj message da izidje da je vec ulogovan
            this._router.navigate(['/home']);
        }
    }

    checkFields(): boolean {
        for (var key in this.userRegisterDTO) {
            if (this.userRegisterDTO[key] == null || this.userRegisterDTO[key] === '') {
                return false;
            }
        }
        return true;
    }

    register() {
        if (this.checkFields()) {
            // polja popunjena
            if(this._user.register(this.userRegisterDTO) != null){
                // success
                // posalji poruku
                this._router.navigate(['/auth/login']);
            }
        } else {
            // posalji poruku
            console.log("ispuni sva polja!");
        }
    }

}