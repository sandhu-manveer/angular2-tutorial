import { Component, OnInit, Output, EventEmitter } from 'angular2/core';

@Component({
    selector: 'sensor-filter',
    templateUrl: 'app/sensor-config/sensor-filter.html'
})

export class SensorFilterComponent implements OnInit {
    private selectedCategory: string;
    private categories: string[];

    @Output() filterChanges: EventEmitter<string> = new EventEmitter();

    constructor () {}

    ngOnInit() {
        this.categories = [
            'temperature',
            'humidity',
            'switch'
        ];
    }

    categoryChanged(value) {
        this.selectedCategory = value;
        this.filterChanges.emit(this.selectedCategory);
    }
}