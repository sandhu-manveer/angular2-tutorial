System.register(['angular2/core', '../modal/open-with.directive', '../modal/modal.component'], function(exports_1, context_1) {
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
    var core_1, open_with_directive_1, modal_component_1;
    var SensorListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (open_with_directive_1_1) {
                open_with_directive_1 = open_with_directive_1_1;
            },
            function (modal_component_1_1) {
                modal_component_1 = modal_component_1_1;
            }],
        execute: function() {
            SensorListComponent = (function () {
                function SensorListComponent() {
                    this.showAdd = false;
                    this.addItem = new core_1.EventEmitter();
                }
                SensorListComponent.prototype.add = function (sensor) {
                    this.addItem.emit(sensor);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], SensorListComponent.prototype, "sensors", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], SensorListComponent.prototype, "showAdd", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], SensorListComponent.prototype, "addItem", void 0);
                SensorListComponent = __decorate([
                    core_1.Component({
                        selector: 'sensor-list',
                        templateUrl: 'app/sensor-config/sensor-list.html',
                        directives: [modal_component_1.ModalComponent, open_with_directive_1.OpenWithDirective],
                    }), 
                    __metadata('design:paramtypes', [])
                ], SensorListComponent);
                return SensorListComponent;
            }());
            exports_1("SensorListComponent", SensorListComponent);
        }
    }
});
//# sourceMappingURL=sensor-list.component.js.map