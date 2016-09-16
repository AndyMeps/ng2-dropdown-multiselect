import { Component, Input, Output, OnInit, OnChanges, EventEmitter, SimpleChange, Self } from '@angular/core';
import { NgModel, ControlValueAccessor } from '@angular/forms';

import { IDropdownItem, IMultiselectConfig } from '../interfaces';
import { MultiselectConfig } from '../models';

/**
 * Dropdown Multiselect component to be used by components.
 *
 * Input: dropdown-config - configuration.
 * Input: dropdown-model - dropdown options model.
 *
 * @export
 * @class DropdownMultiselectComponent
 * @implements {ControlValueAccessor, OnInit}
 */
@Component({
    selector: 'dropdown-multiselect[ngModel]',
    template: `<div class="multiselect-container" dropdown autoClose="outsideClick">
                <button [ngClass]="config.buttonClasses" dropdownToggle>
                    <span>{{buttonLabel}}</span> ({{selectedLength}})
                    <span class="caret"></span>
                </button>
                <ul dropdownMenu class="dropdown-menu scrollable-menu" [style.max-height]="config.scrollingHeight + 'px'">
                    <li *ngIf="config.showCheckAll" [ngClass]="{'with-border': !config.showUncheckAll }" class="top-section">
                        <a class="dropdown-item" (click)="checkAll()">
                            <i *ngIf="config.checkClasses.length > 0" [ngClass]="config.checkClasses"></i>
                            <input *ngIf="config.checkClasses.length === 0" type="checkbox" name="check-all" checked="checked" readonly />
                            <span> Check All</span>
                        </a>
                    </li>
                    <li *ngIf="config.showUncheckAll" class="top-section with-border">
                        <a (click)="uncheckAll()" class="dropdown-item">
                            <i *ngIf="config.uncheckClasses.length > 0" [ngClass]="config.uncheckClasses"></i>
                            <input *ngIf="config.uncheckClasses.length === 0" type="checkbox" name="uncheck-all" readonly />
                            <span> Uncheck All</span>
                        </a>
                    </li>
                    <li *ngFor="let row of cd.viewModel" role="menuitem">
                        <a class="dropdown-item" (click)="toggleRow(row)">
                            <i *ngIf="row.selected && config.checkClasses.length > 0" [ngClass]="config.checkClasses"></i>
                            <input *ngIf="config.checkClasses.length === 0" [name]="row.id + '-checkbox'" [(ngModel)]="row.selected" type="checkbox" />
                            <span *ngIf="row.color" [style.background-color]="row.color" class="row-color"></span>
                            <span>{{row.label}}</span>
                        </a>
                    </li>
                </ul>
            </div>`,
    styles: [`.multiselect-container {
                display: inline-block; }`,

             `.top-section.with-border {
                border-bottom: 1px solid #ccc; }`,

             `.with-border > .dropdown-item {
                margin-bottom: 4px; }`,

             `.with-border {
               margin-bottom: 4px; }`,

             `.row-color {
                width: 15px;
                height: 15px;
                display: inline-block;
                position: relative;
                top: 3px;
                margin-right: 5px;
                border-radius: 3px; }`,

              `.scrollable-menu {
                height: auto;
                overflow-x: hidden;
              }`]
})
export class DropdownMultiselectComponent implements ControlValueAccessor, OnInit {

  /**
   * Configuration object to show bespoke version of component.
   *
   * @type {IMultiselectConfig}
   */
  @Input('dropdown-config') opts: IMultiselectConfig;

  public cd: NgModel;

  public onChange: any = Function.prototype;
  public onTouched: any = Function.prototype;

  private dropdownItems: IDropdownItem[];

  // -------------------------------------------------------------------------------------------------
  /**
   * Configuration object used by the template.
   *
   * @type {MultiselectConfig}
   */
  public config: MultiselectConfig;

  // -------------------------------------------------------------------------------------------------
  /**
   * Creates an instance of DropdownMultiselectComponent.
   *
   */
  constructor(@Self() cd: NgModel) {
    this.cd = cd;
    cd.valueAccessor = this;

    this.cd.viewModel = [];
    this.config = new MultiselectConfig();
  }

  // -------------------------------------------------------------------------------------------------
  /**
   * Angular lifecycle hook, executed after constructor
   */
  ngOnInit() {

    for (let i = 0; i < this.cd.viewModel.length; i++) {
      if (this.cd.viewModel[i].selected == null) {
        this.cd.viewModel[i].selected = false;
      }
    };

    this._processOptions();

  }

  get selectedLength(): number {
    return this.cd.viewModel.filter((o: IDropdownItem) => { return o.selected; }).length;
  }

  get buttonLabel(): string {
    let len = this.selectedLength;

    if (len <= this.config.maxInline && len > 0) {
      let value: string = '';

      this.cd.viewModel.forEach((row) => {
        if (row.selected) {
          value += row.label + ', ';
        }
      });

      return value.slice(0, value.length - 2); // Remove trailing ', '
    } else {
      return this.config.buttonLabel;
    }
  }

  // -------------------------------------------------------------------------------------------------
  /**
   * Select / deselect dropdown option.
   */
  public toggleRow = (row: IDropdownItem) => {
    row.selected = !row.selected;
  }

  /**
   * Deselect all dropdown options.
   */
  public uncheckAll = () => {
    this._setSelectedTo(false);
  }

  /**
   * Select all dropdown options.
   */
  public checkAll = () => {
    this._setSelectedTo(true);
  }

  public writeValue(value: any) {

  }

  public registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: (_: any) => {}): void {
    this.onTouched = fn;
  }

  // -------------------------------------------------------------------------------------------------

  /**
   * Determine how the dropdown should be configured.
   *
   * @private
   */
  private _processOptions = () => {
    // defaultButtonText
    if (this.opts.defaultButtonText) {
      this.config.buttonLabel = this.opts.defaultButtonText;
    }

    // allSelected
    if (typeof(this.opts.allSelected) === 'boolean') {
      this.config.allSelected = this.opts.allSelected;

      this.checkAll();
    }

    // showCheckAll
    if (typeof(this.opts.showCheckAll) === 'boolean') {
      this.config.showCheckAll = this.opts.showCheckAll;
    }

    // showUncheckAll
    if (typeof(this.opts.showUncheckAll) === 'boolean') {
      this.config.showUncheckAll = this.opts.showUncheckAll;
    }

    // maxInline
    if (this.opts.maxInline) {
      this.config.maxInline = this.opts.maxInline;
    }

    // buttonClasses
    if (this.opts.buttonClasses) {
      this.config.buttonClasses = this.opts.buttonClasses;
    }

    // checkClasses
    if (this.opts.checkClasses) {
      this.config.checkClasses = this.opts.checkClasses;
    }

    // uncheckClasses
    if (this.opts.uncheckClasses) {
      this.config.uncheckClasses = this.opts.uncheckClasses;
    }

    // scrollingHeight
    if (this.opts.scrollingHeight) {
      this.config.scrollingHeight = this.opts.scrollingHeight;
    }
  }

  /**
   * Update all options in the model to either:
   * - selected (provide val = true)
   * - deselected (provide val = false)
   *
   * @private
   */
  private _setSelectedTo = (val: boolean) => {

    for (let i = 0; i < this.cd.viewModel.length; i++) {
      this.cd.viewModel[i].selected = val;
    };

  }

}