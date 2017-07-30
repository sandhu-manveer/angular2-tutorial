System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var ConfigModalComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ConfigModalComponent = (function () {
                function ConfigModalComponent() {
                    this.isOpen = false;
                    this.sensorModel = { name: '', description: '', type: '' };
                    this.confirm = new core_1.EventEmitter();
                }
                ConfigModalComponent.prototype.open = function (sensor) {
                    this.sensorModel = {
                        name: sensor.name,
                        description: sensor.description,
                        type: sensor.type
                    };
                    this.isOpen = true;
                };
                ConfigModalComponent.prototype.ok = function () {
                    this.isOpen = false;
                    this.confirm.emit(this.sensorModel);
                };
                ConfigModalComponent.prototype.cancel = function () {
                    this.isOpen = false;
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], ConfigModalComponent.prototype, "confirm", void 0);
                ConfigModalComponent = __decorate([
                    core_1.Component({
                        selector: 'config-modal',
                        template: "\n        <div class=\"md-dialog mdl-color--white mdl-shadow--2dp\" [hidden]=\"!isOpen\">\n            <div class=\"md-dialog-content\">\n                <div class=\"md-dialog-content\">\n                    <div class=\"typo-styles__demo mdl-typography--headline\">\n                        {{ sensorModel.name }}\n                    </div>\n                    <div class=\"md-dialog-content-body\">\n                        <div class=\"mdl-card__supporting-text\">\n                            <form action=\"#\">\n                                <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\" [ngClass]=\"{ 'is-dirty': sensorModel.name}\">\n                                    <input class=\"mdl-textfield__input\" type=\"text\" id=\"name\" [(ngModel)]=\"sensorModel.name\"  />\n                                    <label class=\"mdl-textfield__label\" for=\"name\">Name</label>\n                                </div>\n                                <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\" [ngClass]=\"{ 'is-dirty': sensorModel.description}\">\n                                    <textarea class=\"mdl-textfield__input\" [(ngModel)]=\"sensorModel.description\"></textarea>\n                                    <label class=\"mdl-textfield__label\" for=\"userpass\">Description</label>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"md-dialog-actions\">\n                <button class=\"mdl-button mdl-js-button mdl-js-ripple-effect\" (click)=\"ok()\">\n                    Ok\n                </button>\n                <button class=\"mdl-button mdl-js-button mdl-js-ripple-effect\" (click)=\"cancel()\">\n                    Cancel\n                </button>\n            </div>\n        </div>\n        <div class=\"md-backdrop\" [hidden]=\"!isOpen\"></div>\n    ",
                        styles: [
                            "\n        .md-dialog {\n            position: fixed;\n            top: 150px;\n            margin: 0 auto;\n            z-index: 51;\n        }\n\n        .md-dialog-content {\n            min-width: 450px;\n            min-height: 100px;\n            padding: 24px;\n            -webkit-order: 1;\n            -ms-flex-order: 1;\n            order: 1;\n            -webkit-flex-direction: column;\n            -ms-flex-direction: column;\n            flex-direction: column;\n            overflow: auto;\n            -webkit-overflow-scrolling: touch;\n        }\n\n        .md-dialog-content > mdl-typography--headline {\n            font-weight: 600;\n        }\n\n        .md-dialog-content-body {\n            padding: 15px 0 5px 0;\n        }\n\n        .md-dialog-actions {\n            display: -webkit-flex;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-order: 2;\n            -ms-flex-order: 2;\n            order: 2;\n            box-sizing: border-box;\n            -webkit-align-items: center;\n            -ms-flex-align: center;\n            align-items: center;\n            -webkit-justify-content: flex-end;\n            -ms-flex-pack: end;\n            justify-content: flex-end;\n            margin-bottom: 0;\n            padding-right: 8px;\n            padding-left: 16px;\n            min-height: 52px;\n            overflow: hidden;\n        }\n\n        .md-backdrop {\n            background-color: rgba(33,33,33,1.0);\n            opacity: .48;\n            transition: opacity 450ms;\n            position: fixed;\n            top: 0;\n            bottom: 0;\n            left: 0;\n            right: 0;\n            z-index: 50;\n        }\n        "
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ConfigModalComponent);
                return ConfigModalComponent;
            }());
            exports_1("ConfigModalComponent", ConfigModalComponent);
        }
    }
});
//# sourceMappingURL=config-modal.component.js.map