import { Component, Input, Output, OnInit, OnChanges, EventEmitter, SimpleChange } from '@angular/core';

import { IDropdownItem } from '../../interfaces/dropdown-item.interface';
import { IMultiselectConfig } from '../../interfaces/multiselect-config.interface';

import { MultiselectConfig } from '../../models/multiselect-config.model';

/**
 * Dropdown Multiselect component to be used by components.
 *
 * Input: dropdown-config - configuration.
 * Input: dropdown-model - dropdown options model.
 *
 * @export
 * @class DropdownMultiselectComponent
 * @implements {OnInit}
 */
@Component({
    selector: 'dropdown-multiselect',
    template: `<div class="multiselect-container" dropdown autoClose="outsideClick">
                <button [ngClass]="config.buttonClasses" dropdownToggle>
                    <span>{{config.buttonLabel}}</span> ({{selectedLength}})
                    <span class="caret"></span>
                </button>
                <ul dropdownMenu class="dropdown-menu">
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
                    <li *ngFor="let row of model" role="menuitem">
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
                border-radius: 3px; }`]
})
export class DropdownMultiselectComponent implements OnInit, OnChanges {

  /**
   * Configuration object to show bespoke version of component.
   *
   * @type {IMultiselectConfig}
   */
  @Input('dropdown-config') opts: IMultiselectConfig;
  /**
   * Dropdown options to be rendered.
   *
   * @type {IDropdownItem[]}
   */
  @Input('dropdown-model') model: IDropdownItem[];

  /**
   * Hook for components to capture changes in selections.
   *
   * @type {EventEmitter<any>}
   */
  @Output() onChange: EventEmitter<any> = new EventEmitter();

  // -------------------------------------------------------------------------------------------------
  /**
   * Configuration object used by the template.
   *
   * @type {MultiselectConfig}
   */
  public config: MultiselectConfig;

  /**
   * Number of options selected.
   *
   * @type {number}
   */
  public selectedLength: number;

  // -------------------------------------------------------------------------------------------------
  /**
   * Creates an instance of DropdownMultiselectComponent.
   *
   */
  constructor() {
    this.config = new MultiselectConfig();
    this.selectedLength = 0;
  }

  // -------------------------------------------------------------------------------------------------
  /**
   * Angular lifecycle hook, executed after constructor
   */
  ngOnInit() {

    this._processOptions();

    this.model.forEach((row) => {
      if(row.selected == null) {
        row.selected = false;
      }
    });

    this._getSelectedLength();

  }

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    console.groupCollapsed('Changes to dropdown-multiselect:');
    console.log(changes);
    console.groupEnd();
  }

  // -------------------------------------------------------------------------------------------------
  /**
   * Select / deselect dropdown option.
   */
  public toggleRow = (row: IDropdownItem) => {
    row.selected = !row.selected;

    this._getSelectedLength();
    this._onChange();
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

  // -------------------------------------------------------------------------------------------------
  /**
   * Determine the selected number of options.
   *
   * @private
   */
  private _getSelectedLength = () => {
    this.selectedLength = this.model.filter((row) => { return row.selected }).length;

    if (this.selectedLength <= this.config.maxInline && this.selectedLength > 0) {
      let value: string = '';

      this.model.forEach((row) => {
        if (row.selected) {
          value += row.label + ', ';
        }
      });

      this.config.buttonLabel = value.slice(0, value.length - 2); // Remove trailing ', '
    } else {
      this.config.buttonLabel = this.opts.defaultButtonText;
    }
  }

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
  }

  /**
   * Update all options in the model to either:
   * - selected (provide val = true)
   * - deselected (provide val = false)
   *
   * @private
   */
  private _setSelectedTo = (val: boolean) => {
    this.model.forEach((row) => {
      row.selected = val;
    });

    this._getSelectedLength();

    this._onChange();
  }

  /**
   * emit onchange event with the model options that are selected.
   *
   * @private
   */
  private _onChange = () => {
    this.onChange.emit(this.model.filter((row) => { return row.selected }));
  }

}