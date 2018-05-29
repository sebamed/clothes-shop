import { Component, OnInit, OnDestroy } from "@angular/core";
import { UserService } from "../../services/user.service";
import { IUser } from "../../model/user.interface";
import { ToastSerice } from "../../pages/shared/toast/toast.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { UserModalComponent } from "./user-modal/user-modal.component";

@Component({
    selector: 'admin-users',
    templateUrl: './admin-users.component.html',
    styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit, OnDestroy {

    users: IUser[] = [];

    selectedUsers: IUser[] = [];

    constructor(private _user: UserService, private _toasts: ToastSerice, private _modal: NgbModal) {

    }

    ngOnInit() {
        this.setUsers();
    }

    ngOnDestroy() {

    }

    openUserModal(user: IUser) {
        const typesModalRef = this._modal.open(UserModalComponent);
        typesModalRef.componentInstance.currentUser = user;
    }

    setUsers() {
        this._user.getAllUsers().subscribe((res: IUser[]) => {
            this.users = [];
            this.users = res;
        });
    }

    deleteUsers(){
        if (this.selectedUsers.length === 0) {
            // toast da nema selektovanih
            console.log("nnema selektovanih");
            this._toasts.addErrorToast("No products selected!");
        } else {
            this._user.deleteUsers(this.selectedUsers);
            this.selectedUsers = [];
            this._toasts.addSuccessToast("Selected products deleted!");
            this.setUsers();
        }
    }

    selectUser(user: IUser) {
        if (this.selectedUsers.includes(user)) {
            this.selectedUsers.splice(this.selectedUsers.indexOf(user));
        } else {
            this.selectedUsers.push(user);
        }
    }
}