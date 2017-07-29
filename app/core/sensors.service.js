System.register(['angular2/core', 'angular2/http', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var SensorService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            // angular service: es6 class with injectable decorator
            // so it is known that it is to be injected elsewhere
            SensorService = (function () {
                function SensorService(http) {
                    this.http = http;
                    this.dashboardSensors = [];
                }
                SensorService.prototype.discoverSensors = function () {
                    return this.http
                        .get('/assets/data/newsensors.json')
                        .map(function (res) { return res.json(); });
                };
                SensorService.prototype.addToDashboard = function (sensor) {
                    this.dashboardSensors.push(sensor);
                };
                SensorService.prototype.getDashboardSensors = function () {
                    return this.dashboardSensors;
                };
                SensorService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], SensorService);
                return SensorService;
            }());
            exports_1("SensorService", SensorService);
        }
    }
});
//# sourceMappingURL=sensors.service.js.map