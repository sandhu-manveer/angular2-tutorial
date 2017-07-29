import {Component, OnInit} from 'angular2/core';

import { Sensor, SensorService } from '../core/sensors.service'

@Component({
  selector: 'configure',
  directives: [ ],
  templateUrl: 'app/sensor-config/sensor-config.html'
})

export class SensorConfigureComponent implements OnInit {
    private sensors: Sensor[];

    constructor (private sensorService: SensorService) {
    }

    ngOnInit() { }

    refreshSensors() {
        this.sensorService.discoverSensors()
            .subscribe( data => {
                this.sensors = data;
            });
    }
}
