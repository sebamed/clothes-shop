import { Component, OnInit, OnDestroy } from '@angular/core';


declare var $: any;

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {

    search: boolean = true;

    ngOnInit() {
        $('.search-form').hide();
        $(window).on('scroll', function () {
            if($('nav').offset().top > 70){
                $('nav').css({'padding-top':'.7rem', 'padding-bottom':'.7rem'});
            } else {
                $('nav').css({'padding':'2rem'});
            }
        });
    }

    ngOnDestroy() {

    }



    toggleSearch() {
        if (this.search) {
            $('.search-form').show("slide", { direction: "right" }, 500);
        } else {
            $('.search-form').hide("slide", { direction: "right" }, 500);
        }
        this.search = !this.search;
    }
}