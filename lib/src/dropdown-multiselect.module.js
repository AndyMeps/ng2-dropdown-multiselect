"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var components_1 = require('./components');
var DropdownMultiselectModule = (function () {
    function DropdownMultiselectModule() {
    }
    DropdownMultiselectModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [components_1.DropdownMultiselectComponent],
            exports: [components_1.DropdownMultiselectComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], DropdownMultiselectModule);
    return DropdownMultiselectModule;
}());
exports.DropdownMultiselectModule = DropdownMultiselectModule;
//# sourceMappingURL=dropdown-multiselect.module.js.map