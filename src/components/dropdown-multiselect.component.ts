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
                        <a class="dropdown-item dropdown-multiselect-clickable" (click)="checkAll()">
                            <i *ngIf="config.checkClasses.length > 0" [ngClass]="config.checkClasses"></i>
                            <input *ngIf="config.checkClasses.length === 0" type="checkbox" name="check-all" checked="checked" readonly />
                            <span> Check All</span>
                        </a>
                    </li>
                    <li *ngIf="config.showUncheckAll" class="top-section with-border">
                        <a (click)="uncheckAll()" class="dropdown-item dropdown-multiselect-clickable">
                            <i *ngIf="config.uncheckClasses.length > 0" [ngClass]="config.uncheckClasses"></i>
                            <input *ngIf="config.uncheckClasses.length === 0" type="checkbox" name="uncheck-all" readonly />
                            <span> Uncheck All</span>
                        </a>
                    </li>
                    <li *ngFor="let row of cd.viewModel" role="menuitem">
                        <a class="dropdown-item dropdown-multiselect-clickable" (click)="toggleRow(row)">
                            <span class="check-area">
                              <i *ngIf="row.selected && config.checkClasses.length > 0" [ngClass]="config.checkClasses"></i>
                              <input *ngIf="config.checkClasses.length === 0" [name]="row.id + '-checkbox'" [(ngModel)]="row.selected" type="checkbox" />
                            </span>
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
                overflow-x: hidden; }`,

             `.check-area {
                width: 18px;
                display: inline-block; }`,

             `.dropdown-multiselect-clickable {
               cursor: pointer; }`],
    providers: [ NgModel ]
})
export class DropdownMultiselectComponent implements ControlValueAccessor, OnInit {

  /**
   * Configuration object to show bespoke version of component.
   *
   * @type {IMultiselectConfig}
   */
  @Input() dropdownConfig: IMultiselectConfig;

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

  /** Creates an instance of DropdownMultiselectComponent. */
  constructor(@Self() cd: NgModel) {
    this.cd = cd;
    cd.valueAccessor = this;

    this.cd.viewModel = [];
    this.config = new MultiselectConfig();
  }

  // -------------------------------------------------------------------------------------------------

  /** OnInit implementation */
  ngOnInit() {
    this.setSelectedTo(false);
    this.processOptions(this.dropdownConfig);
  }

  /** ControlValueAccessor implementation */
  writeValue(value: any) { }

  /** ControlValueAccessor implementation */
  registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  /** ControlValueAccessor implementation */
  registerOnTouched(fn: (_: any) => {}): void {
    this.onTouched = fn;
  }

  // -------------------------------------------------------------------------------------------------

  /**
   * Returns the count of selected dropdown items.
   *
   * @readonly
   * @type {number}
   * @memberOf DropdownMultiselectComponent
   */
  get selectedLength(): number {
    return this.cd.viewModel.filter(({selected}) => selected).length;
  }

  /**
   * Returns the appropriate string to display on the dropdown button.
   *
   * @readonly
   * @type {string}
   * @memberOf DropdownMultiselectComponent
   */
  get buttonLabel(): string {
    const count = this.selectedLength;
    const model = this.cd.viewModel;
    const { maxInline, buttonLabel } = this.config;

    if (count > maxInline || count === 0) { return buttonLabel; }

    const label = model.reduce((prev, {selected, label}) => {
      if (!selected) return prev;
      return `${prev}${label}, `;
    }, '');

    return label.slice(0, label.length - 2); // Remove trailing ', '
  }

  // -------------------------------------------------------------------------------------------------

  /**
   * Select / deselect dropdown option.
   */
  public toggleRow(item: IDropdownItem) {
    item.selected = !item.selected;
    this.onChange(this.cd.viewModel);
  }

  /**
   * Deselect all dropdown options.
   */
  public uncheckAll() {
    this.setSelectedTo(false);
    this.onChange(this.cd.viewModel);
  }

  /**
   * Select all dropdown options.
   */
  public checkAll() {
    this.setSelectedTo(true);
    this.onChange(this.cd.viewModel);
  }

  // -------------------------------------------------------------------------------------------------

  /**
   * Determine how the dropdown should be configured.
   *
   * @private
   */
  private processOptions(opts: IMultiselectConfig) {

    // defaultButtonText
    if (typeof(opts.defaultButtonText) === 'string') {
      this.config.buttonLabel = opts.defaultButtonText;
    }

    // allSelected
    if (typeof(opts.allSelected) === 'boolean') {
      this.config.allSelected = opts.allSelected;

      if (this.config.allSelected) {
        this.checkAll();
      }
    }

    // showCheckAll
    if (typeof(opts.showCheckAll) === 'boolean') {
      this.config.showCheckAll = opts.showCheckAll;
    }

    // showUncheckAll
    if (typeof(opts.showUncheckAll) === 'boolean') {
      this.config.showUncheckAll = opts.showUncheckAll;
    }

    // maxInline
    if (typeof(opts.maxInline) === 'number') {
      this.config.maxInline = opts.maxInline;
    }

    // buttonClasses
    if (Array.isArray(opts.buttonClasses)) {
      this.config.buttonClasses = opts.buttonClasses;
    }

    // checkClasses
    if (Array.isArray(opts.checkClasses)) {
      this.config.checkClasses = opts.checkClasses;
    }

    // uncheckClasses
    if (Array.isArray(opts.uncheckClasses)) {
      this.config.uncheckClasses = opts.uncheckClasses;
    }

    // scrollingHeight
    if (typeof(opts.scrollingHeight) === 'number') {
      this.config.scrollingHeight = opts.scrollingHeight;
    }
  }

  /**
   * Update all options in the model to either:
   * - selected `val = true`
   * - deselected `val = false`
   *
   * @private
   */
  private setSelectedTo(val: boolean) {
    const newModel = this.cd.viewModel.map((item) => {
      return Object.assign({}, item, { selected: val });
    });

    this.cd.viewToModelUpdate(newModel);
  }

}
