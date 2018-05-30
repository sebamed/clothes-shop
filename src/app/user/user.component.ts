import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../services/user.service';
import { ToastSerice } from '../pages/shared/toast/toast.service';
import { ToastTitle } from '../model/enum/toast-title.enum';
import { ToastType } from '../model/enum/toast-type.enum';
import { ToastIcon } from '../model/enum/toast-icon.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'user',
  template: '<router-outlet></router-outlet>'
})
export class UserComponent implements OnInit, OnDestroy {

  constructor(private _user: UserService,
    private _toasts: ToastSerice,
    private _router: Router
  ) {

  }

  ngOnInit() {
    // provera da li je ulogovani user admin i da li postoji ulogovani user
    if ((this._user.getCurrentUser() === undefined) || this._user.getCurrentUser().role.name != 'user' && this._user.getCurrentUser().role.name != 'admin') {
      // nije admin
      this._toasts.addWarningToast("You must be logged in to do this!");
      this._router.navigate(['/auth/login']);
    }
  }

  ngOnDestroy() {
    // 
  }

}