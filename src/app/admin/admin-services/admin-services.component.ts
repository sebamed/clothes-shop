import { Component, OnInit, OnDestroy } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { IconModalComponent } from "./icons-modal/icons-modal.component";

@Component({
    selector: 'admin-services',
    templateUrl: './admin-services.component.html',
    styleUrls: ['./admin-services.component.scss']
})
export class AdminServicesComponent implements OnInit, OnDestroy {

    constructor(private _modal: NgbModal){

    }

    ngOnInit() {

    }

    ngOnDestroy() {

    }

    openModal(){
        const typesModalRef = this._modal.open(IconModalComponent);
    }
}