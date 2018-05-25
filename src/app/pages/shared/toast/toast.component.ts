import { Component, OnInit, OnDestroy } from "@angular/core";
import { IToast } from "../../../model/toast.interface";
import { Subscription } from "rxjs";
import { ToastSerice } from "./toast.service";

@Component({
    selector: 'app-toasts',
    templateUrl: './toast.component.html',
    styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit, OnDestroy {

    toasts: IToast[] = [];

    toastsChanged: Subscription;

    constructor(private _toasts: ToastSerice) {

    }

    ngOnInit() {
        this.toastsChanged = this._toasts.toastsUpdated.subscribe(res => {
            this.toasts = this._toasts.toasts;
        });
    }

    ngOnDestroy() {
        try {
            this.toastsChanged.unsubscribe();
        } catch (e) {
            console.log(e);
        }
    }

    removeToast(toast: IToast){
        this._toasts.removeToast(toast);
    }

}