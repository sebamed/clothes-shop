import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServicesService } from '../../../services/services.service';
import { IService } from '../../../model/service.interface';

@Component({
    selector: 'home-services',
    templateUrl: './our-services.component.html',
    styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit, OnDestroy {

    services: IService[] = [];

    constructor(private _services: ServicesService) {

    }

    ngOnInit() {
        this.getAllServices();
    }

    ngOnDestroy() {

    }

    getAllServices() {
        this._services.getAllServices().subscribe(res => {
            this.services = res;
        },
            error => {
                console.log(error);
            },
            () => console.log("our-services: " + this.services));
    }
}