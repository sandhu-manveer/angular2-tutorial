import {Component, OnInit} from 'angular2/core';

import { Sensor, SensorService } from '../core/sensors.service';

import { SensorListComponent } from './sensor-list.component';
import { SensorFilterComponent } from './sensor-filter.component';

import { FilterSensor } from './filter-sensor.pipe';

@Component({
  selector: 'configure',
  directives: [ SensorListComponent, SensorFilterComponent ],
  pipes: [ FilterSensor ],
  templateUrl: 'app/sensor-config/sensor-config.html'
})

export class SensorConfigureComponent implements OnInit {
    private sensors: Sensor[] = [];

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
