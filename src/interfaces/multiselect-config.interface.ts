/**
 * Interface to allow for customization of DropdownMultiselect
 *
 * @export
 * @interface IMultiselectConfig
 */
export interface IMultiselectConfig {
  /**
   * Label to be displayed when dropdown selected is 0 or > maxInline
   *
   * @type {string}
   */
  defaultButtonText?: string;
  /**
   * Should all options be selected by default?
   *
   * @type {boolean}
   */
  allSelected?: boolean;
  /**
   * How many option labels should be displayed in the button?
   *
   * @type {number}
   */
  maxInline?: number;
  /**
   * Provide a "Check All" option?
   *
   * @type {boolean}
   */
  showCheckAll?: boolean;
  /**
   * Provide a "Uncheck All" option?
   *
   * @type {boolean}
   */
  showUncheckAll?: boolean;
  /**
   * CSS classes to be added to the dropdown button
   *
   * @type {string[]}
   */
  buttonClasses?: string[];
  /**
   * CSS classes to be added to <i> of checked options and "Check All"
   *
   * @type {string[]}
   */
  checkClasses?: string[];
  /**
   * CSS classes to be added to <i> of "Uncheck All"
   *
   * @type {string[]}
   */
  uncheckClasses?: string[];
  /**
   * Height at which the dropdown will start to scroll
   * 
   * @type {number}
   */
  scrollingHeight?: number;
}