import { Injectable, EventEmitter } from "@angular/core";
import { IToast } from "../../../model/toast.interface";
import { Observable } from 'rxjs/Observable';
import { Subscription } from "rxjs/Subscription";
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/timer';
import { ToastTitle } from "../../../model/enum/toast-title.enum";
import { ToastType } from "../../../model/enum/toast-type.enum";
import { ToastIcon } from "../../../model/enum/toast-icon.enum";

@Injectable()
export class ToastSerice {

    toasts: IToast[] = [];

    timer: Observable<any>;
    timerSub: Subscription;

    toastsUpdated: EventEmitter<any> = new EventEmitter();

    private addToast(toast: IToast){
        this.toasts.push(toast);
        this.toastsUpdated.emit();
        if(this.toasts.indexOf(toast) > -1){
            this.toastTimer();
        } else {
            this.timerSub.unsubscribe();
        }
    }

    addErrorToast(msg: String){
        this.addToast({
            title: ToastTitle.error,
            message: msg,
            type: ToastType.error,
            icon: ToastIcon.error
        });
    }

    addSuccessToast(msg: String){
        this.addToast({
            title: ToastTitle.success,
            message: msg,
            type: ToastType.success,
            icon: ToastIcon.success
        });
    }

    addWarningToast(msg: String){
        this.addToast({
            title: ToastTitle.warning,
            message: msg,
            type: ToastType.warning,
            icon: ToastIcon.warning
        });
    }

    addInfoToast(msg: String){
        this.addToast({
            title: ToastTitle.info,
            message: msg,
            type: ToastType.info,
            icon: ToastIcon.info
        });
    }

    toastTimer(){
        this.timer = Observable.timer(5000);
        this.timerSub = this.timer.subscribe(() => {
            this.toasts.shift();
            this.toastsUpdated.emit();
        });
    }

    removeToast(toast: IToast){
        this.toasts.splice(this.toasts.indexOf(toast));
        this.toastsUpdated.emit();
    }

}