import { Component, Input, OnInit, OnDestroy } from '@angular/core';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import * as icons from 'font-awesome-list';
import { IService } from '../../model/service.interface';

@Component({
    selector: 'admin-icon-modal',
    templateUrl: './icons-modal.component.html',
    styleUrls: ['./icons-modal.component.scss']
})
export class IconModalComponent implements OnInit, OnDestroy {

    @Input() currentService: IService;

    currentIcon: String;

    searchIcon: String = "";

    iconsNames: String[] = [];

    constructor(public activeModal: NgbActiveModal, private modalService: NgbModal) { }

    ngOnInit() {
        this.setCurrentIcon();
        this.setIconsNames();
    }

    ngOnDestroy() {

    }

    open() {
        const modalRef = this.modalService.open(IconModalComponent);
    }

    saveCurrent(){
        this.currentService.icon = this.currentIcon;
        this.activeModal.close();
    }

    setIconsNames(){
        for(let i = 0; i < icons.all().length; i++){
            this.iconsNames.push(icons.all()[i].id);
        }
    }

    setCurrent(icon: String){
        this.currentIcon = icon;
    }

    setCurrentIcon(){
        this.currentIcon = this.currentService.icon;
    }
}