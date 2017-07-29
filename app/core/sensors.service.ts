import { Injectable } from 'angular2/core';
import { Http } from 'angular2/http';
import 'rxjs/Rx';

export interface Sensor {
    name: string,
    description: string
}

// angular service: es6 class with injectable decorator
// so it is known that it is to be injected elsewhere
@Injectable() 
export class SensorService {
    constructor(private http: Http) {}

    discoverSensors() {
        return this.http
            .get('/assets/data/newsensors.json')
            .map(res => res.json())
    }
}