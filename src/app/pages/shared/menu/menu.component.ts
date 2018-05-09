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
            if (!($('nav').offset().top > 70)) {
                $('nav').css({ 'padding-top': '.3rem', 'padding-bottom': '.3rem', 'background-color': 'transparent', 'box-shadow': 'none' });
            } else {
                $('nav').css({ 'padding': '1.5rem 2rem', 'background-color': '#1F2F52', 'box-shadow': '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2)' });
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