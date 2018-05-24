import { Component, OnInit, OnDestroy } from "@angular/core";
import { IUserLoginDTO } from "../../../model/dto/userLogin.dto";
import { UserService } from "../../../services/user.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

    keepMeLoggedIn: boolean = false;

    userLoginDTO: IUserLoginDTO = {};

    constructor(private _user: UserService) {

    }

    ngOnInit() {

    }

    ngOnDestroy() {

    }

    toggleKeep() {
        this.keepMeLoggedIn = !this.keepMeLoggedIn;
    }

    login() {
        if (this._user.login(this.userLoginDTO) != null) {
            // success
            if(this.keepMeLoggedIn){
                console.log("success");
                localStorage.setItem("currentUser", JSON.stringify(this._user.getCurrentUser()));
            }

            // change route with logged user
        } else {

        }
    }

}