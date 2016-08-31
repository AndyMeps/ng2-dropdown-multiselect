import { IMultiselectOptions } from '../interfaces/multiselect-options.interface';

export class MultiselectConfig implements IMultiselectOptions {
  public buttonLabel: string;
  public allSelected: boolean;
  public maxInline: number;
  public showCheckAll: boolean;
  public showUncheckAll: boolean;
  public buttonClasses: string[];

  constructor() {
    this.buttonLabel = 'Selected';
    this.allSelected = false;
    this.maxInline = 3;
    this.showCheckAll = false;
    this.showUncheckAll = false;
    this.buttonClasses = ['btn', 'btn-default'];
  }
}