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
var multiselect_config_model_1 = require('../../models/multiselect-config.model');
var DropdownMultiselectComponent = (function () {
    function DropdownMultiselectComponent() {
        var _this = this;
        this.onChange = new core_1.EventEmitter();
        this.toggleRow = function (row) {
            row.selected = !row.selected;
            _this._getSelectedLength();
            _this._onChange();
        };
        this.uncheckAll = function () {
            _this._setSelectedTo(false);
        };
        this.checkAll = function () {
            _this._setSelectedTo(true);
        };
        this._getSelectedLength = function () {
            _this.selectedLength = _this.model.filter(function (row) { return row.selected; }).length;
            if (_this.selectedLength <= _this.config.maxInline && _this.selectedLength > 0) {
                var value_1 = '';
                _this.model.forEach(function (row) {
                    if (row.selected) {
                        value_1 += row.label + ', ';
                    }
                });
                _this.config.buttonLabel = value_1.slice(0, value_1.length - 2);
            }
            else {
                _this.config.buttonLabel = _this.opts.defaultButtonText;
            }
        };
        this._processOptions = function () {
            if (_this.opts.defaultButtonText) {
                _this.config.buttonLabel = _this.opts.defaultButtonText;
            }
            if (typeof (_this.opts.allSelected) === 'boolean') {
                _this.config.allSelected = _this.opts.allSelected;
                _this.checkAll();
            }
            if (typeof (_this.opts.showCheckAll) === 'boolean') {
                _this.config.showCheckAll = _this.opts.showCheckAll;
            }
            if (typeof (_this.opts.showUncheckAll) === 'boolean') {
                _this.config.showUncheckAll = _this.opts.showUncheckAll;
            }
            if (_this.opts.maxInline) {
                _this.config.maxInline = _this.opts.maxInline;
            }
        };
        this._setSelectedTo = function (val) {
            _this.model.forEach(function (row) {
                row.selected = val;
            });
            _this._getSelectedLength();
            _this._onChange();
        };
        this._onChange = function () {
            _this.onChange.emit(_this.model.filter(function (row) { return row.selected; }));
        };
        this.config = new multiselect_config_model_1.MultiselectConfig();
        this.selectedLength = 0;
    }
    DropdownMultiselectComponent.prototype.ngOnInit = function () {
        this._processOptions();
        this.model.forEach(function (row) {
            if (row.selected == null) {
                row.selected = false;
            }
        });
        this._getSelectedLength();
    };
    __decorate([
        core_1.Input('dropdown-options'), 
        __metadata('design:type', Object)
    ], DropdownMultiselectComponent.prototype, "opts", void 0);
    __decorate([
        core_1.Input('dropdown-model'), 
        __metadata('design:type', Array)
    ], DropdownMultiselectComponent.prototype, "model", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DropdownMultiselectComponent.prototype, "onChange", void 0);
    DropdownMultiselectComponent = __decorate([
        core_1.Component({
            selector: 'dropdown-multiselect',
            templateUrl: 'dropdown-multiselect.component.html',
            styleUrls: ['dropdown-multiselect.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], DropdownMultiselectComponent);
    return DropdownMultiselectComponent;
}());
exports.DropdownMultiselectComponent = DropdownMultiselectComponent;
//# sourceMappingURL=dropdown-multiselect.component.js.map