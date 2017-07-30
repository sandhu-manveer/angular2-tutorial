import { Component, OnInit, Input } from 'angular2/core';

@Component({
    selector: 'tab',
    template: `
        <div class="tabs-panel" [hidden]="!isActive">
            <ng-content></ng-content>
        </div>
    `
})

export class TabComponent implements OnInit {
    @Input() title: String;
    isActive: boolean = false;

    constructor() {}

    ngOnInit() {}
}