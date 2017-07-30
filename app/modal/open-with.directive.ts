import { Directive, Input, Output, HostListener, EventEmitter } from 'angular2/core';

import { ModalComponent } from './modal.component'

@Directive({
    selector: '[open-with]'
})
export class OpenWithDirective {
    @Output() confirm: EventEmitter<any> = new EventEmitter();
    @Input('open-with') modalInstance: ModalComponent;

    @HostListener('click')
    clicked() {
        this.modalInstance.open(this.emitConfirm.bind(this));
    }
    
    emitConfirm() {
        this.confirm.emit(null);
    }
}