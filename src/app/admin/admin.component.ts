import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../services/user.service';
import { ToastSerice } from '../pages/shared/toast/toast.service';
import { ToastTitle } from '../model/enum/toast-title.enum';
import { ToastType } from '../model/enum/toast-type.enum';
import { ToastIcon } from '../model/enum/toast-icon.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'admin',
  template: '<router-outlet></router-outlet>'
})
export class AdminComponent implements OnInit, OnDestroy {

  constructor(private _user: UserService,
    private _toasts: ToastSerice,
    private _router: Router
  ) {

  }

  ngOnInit() {
    // provera da li je ulogovani user admin i da li postoji ulogovani user
    if (this._user.getCurrentUser() === undefined || this._user.getCurrentUser().role.name != 'admin') {
      // nije admin
      this._toasts.addWarningToast("You are not authorized to be here, so we are redirecting you!");
      this._router.navigate(['/home']);
    }
  }

  ngOnDestroy() {
    // 
  }

}