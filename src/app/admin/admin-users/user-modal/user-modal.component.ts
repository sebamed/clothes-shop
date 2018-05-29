import { Component, Input, OnInit, OnDestroy } from '@angular/core';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { IUser } from '../../../model/user.interface';
import { UserService } from '../../../services/user.service';

@Component({
    selector: 'admin-user-modal',
    templateUrl: './user-modal.component.html',
    styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent implements OnInit, OnDestroy {

    @Input() currentUser: IUser;

    loggedUser: IUser = undefined;

    constructor(public activeModal: NgbActiveModal, private modalService: NgbModal, private _user: UserService) { }

    ngOnInit() {

    }

    ngOnDestroy() {

    }

    open() {
        const modalRef = this.modalService.open(UserModalComponent);
    }

    saveCurrent(){
        this._user.updateUserRole(this.currentUser);
    }

    makeAdmin(){
        this.currentUser.role = {
            id: 1,
            name: 'admin'
        };
    }

    makeUser(){
        this.currentUser.role = {
            id: 2,
            name: 'user'
        };
    }
}