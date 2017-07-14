import { Component, Input, Output, EventEmitter } from 'angular2/core';

@Component({
    selector: 'hello-angular',
    template: `
    <p> hello {{ who }} </p>
    <button (click)="sayHello()">Say Hello</button>
    `,
    inputs: [ 'who' ]
})

export class HelloAngular2{
    @Input() who: string;
    @Output() onSayHello: EventEmitter<string> = new EventEmitter();

    sayHello() {
        this.onSayHello.emit(`hello, ${this.who}`); 
    }
}