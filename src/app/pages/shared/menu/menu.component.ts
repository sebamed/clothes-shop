import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { IUser } from '../../../model/user.interface';
import { Subscription } from 'rxjs';
import { ToastSerice } from '../toast/toast.service';
import { ToastTitle } from '../../../model/enum/toast-title.enum';
import { ToastIcon } from '../../../model/enum/toast-icon.enum';
import { ToastType } from '../../../model/enum/toast-type.enum';


declare var $: any;

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {

    search: boolean = true;

    currentUser: IUser;

    currentUserUpdateSubscription: Subscription;

    constructor(private _user: UserService, private _toasts: ToastSerice) {

    }

    ngOnInit() {
        this.currentUserUpdateSubscription = this._user.currentUserUpdated.subscribe(res => {
            this.currentUser = this._user.getCurrentUser();
        });
        this.currentUser = this._user.getCurrentUser();
        $('.search-form').hide();
        $(window).on('scroll', function () {
            if (!($('nav').offset().top > 70)) {
                $('nav').css({ 'padding-top': '.3rem', 'padding-bottom': '.3rem', 'background-color': 'transparent', 'box-shadow': 'none' });
            } else {
                $('nav').css({ 'padding': '1.5rem 2rem', 'background-color': '#1F2F52', 'box-shadow': '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2)' });
            }
        });
    }

    ngOnDestroy() {
        try {
            this.currentUserUpdateSubscription.unsubscribe();
        } catch (e) {
            console.log(e);
        }
    }

    setCurrentUser() {
        if (this._user.getCurrentUser() != null) {
            this.currentUser = this._user.getCurrentUser();
        } else {
            this.currentUser = {};
        }
    }

    toggleSearch() {
        if (this.search) {
            $('.search-form').show("slide", { direction: "right" }, 500);
        } else {
            $('.search-form').hide("slide", { direction: "right" }, 500);
        }
        this.search = !this.search;
    }

    userCheck(){
        console.log(this.currentUser);
    }

    logOut(){
        this._user.clearCurrentUser();
        this._toasts.addToast({
            title: ToastTitle.success,
            message: "You are successfully logged out!",
            type: ToastType.success,
            icon: ToastIcon.success
        });
    }
}