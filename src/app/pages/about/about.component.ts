import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'pages-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {

    ngOnInit() {
        console.log("radi about");
    }

    ngOnDestroy() {

    }
}