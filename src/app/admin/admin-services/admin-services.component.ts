import { Component, OnInit, OnDestroy } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { IconModalComponent } from "./icons-modal/icons-modal.component";
import { ServicesService } from "../../services/services.service";
import { IService } from "../../model/service.interface";
import { ToastSerice } from "../../pages/shared/toast/toast.service";

@Component({
    selector: 'admin-services',
    templateUrl: './admin-services.component.html',
    styleUrls: ['./admin-services.component.scss']
})
export class AdminServicesComponent implements OnInit, OnDestroy {

    services: IService[] = [];

    constructor(private _modal: NgbModal, private _services: ServicesService, private _toast: ToastSerice) {

    }

    ngOnInit() {
        this.getAllServices();
    }

    ngOnDestroy() {

    }

    openModal(service: IService) {
        const typesModalRef = this._modal.open(IconModalComponent);
        typesModalRef.componentInstance.currentService = service;
    }

    getAllServices() {
        this._services.getAllServices().subscribe(res => {
            this.services = res;
        },
            error => {
                console.log(error);
            },
            () => console.log(this.services));
    }

    saveAllServices() {
        this._services.saveAllServices(this.services).subscribe(res => {
            console.log(res + " uspesno poslato!");
        },
            error => console.log(error),
            () => console.log("proveribazu sad"));
        this._toast.addSuccessToast("Services updated successfully!");

    }


}