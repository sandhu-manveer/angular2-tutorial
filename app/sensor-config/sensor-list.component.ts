import { Component, Input, Output, EventEmitter } from 'angular2/core';

import { Sensor } from '../core/sensors.service';
import { OpenWithDirective } from '../modal/open-with.directive';
import { ModalComponent } from '../modal/modal.component';

@Component({
    selector: 'sensor-list',
    templateUrl: 'app/sensor-config/sensor-list.html',
    directives: [ ModalComponent, OpenWithDirective ],
})

export class SensorListComponent {
    @Input() sensors: Sensor[];
    @Input() showAdd: boolean = false;
    @Output() addItem: EventEmitter<Sensor> = new EventEmitter<Sensor>();

    constructor() { }

    add(sensor: Sensor) {
        this.addItem.emit(sensor);
    }
}