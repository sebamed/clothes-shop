import { Injectable, EventEmitter } from "@angular/core";
import { IToast } from "../../../model/toast.interface";
import { Observable } from 'rxjs/Observable';
import { Subscription } from "rxjs/Subscription";
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/timer';

@Injectable()
export class ToastSerice {

    toasts: IToast[] = [];

    timer: Observable<any>;
    timerSub: Subscription;

    toastsUpdated: EventEmitter<any> = new EventEmitter();

    addToast(toast: IToast){
        this.toasts.push(toast);
        this.toastsUpdated.emit();
        if(this.toasts.indexOf(toast) > -1){
            this.toastTimer();
        } else {
            this.timerSub.unsubscribe();
        }
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