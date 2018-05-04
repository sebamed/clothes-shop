import { Component, OnInit, OnDestroy } from '@angular/core';


declare var $ : any;

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {

    search: boolean = true;

    ngOnInit() {
        $('.search-form').hide();
    }

    ngOnDestroy() {

    }

    toggleSearch(){
        if(this.search){
            $('.search-form').show("slide", { direction: "right" }, 500);
        } else {
            $('.search-form').hide("slide", { direction: "right" }, 500);
        }
        this.search = !this.search;
    }
}