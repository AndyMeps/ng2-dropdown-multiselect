import { IMultiselectConfig } from '../interfaces/multiselect-config.interface';

/**
 * Configuration class for DropdownMultiselect
 *
 * @export
 * @class MultiselectConfig
 * @implements {IMultiselectConfig}
 */
export class MultiselectConfig implements IMultiselectConfig {
  /**
   * Label to be displayed when dropdown selected is 0 or > maxInline
   *
   * @type {string}
   */
  public buttonLabel: string;
  /**
   * Should all options be selected by default?
   *
   * @type {boolean}
   */
  public allSelected: boolean;
  /**
   * How many option labels should be displayed in the button?
   *
   * @type {number}
   */
  public maxInline: number;
  /**
   * Provide a "Check All" option?
   *
   * @type {boolean}
   */
  public showCheckAll: boolean;
  /**
   * Provide a "Uncheck All" option?
   *
   * @type {boolean}
   */
  public showUncheckAll: boolean;
  /**
   * CSS classes to be added to the dropdown button
   *
   * @type {string[]}
   */
  public buttonClasses: string[];
  /**
   * CSS classes to be added to <i> of checked options and "Check All"
   *
   * @type {string[]}
   */
  public checkClasses: string[];
  /**
   * CSS classes to be added to <i> of "Uncheck All"
   *
   * @type {string[]}
   */
  public uncheckClasses: string[];

  /**
   * Height at which the dropdown will start to scroll
   *
   * @type {number}
   * @memberOf MultiselectConfig
   */
  public scrollingHeight: number;

  /**
   * Creates an instance of MultiselectConfig.
   *
   */
  constructor() {
    this.buttonLabel = 'Selected';
    this.allSelected = false;
    this.maxInline = 3;
    this.showCheckAll = false;
    this.showUncheckAll = false;
    this.buttonClasses = ['btn', 'btn-default'];
    this.checkClasses = [];
    this.uncheckClasses = [];
    this.scrollingHeight = 200;
  }
}