/**
 * Interface to reflect model items.
 *
 * @export
 * @interface IDropdownItem
 */
export interface IDropdownItem {
  /**
   * Unique value, used for selection / deselection.
   *
   * @type {*}
   */
  id: any;
  /**
   * User friendly description for this item.
   *
   * @type {string}
   */
  label: string;
  /**
   * Is the item selected?
   *
   * @type {boolean}
   */
  selected?: boolean;
  /**
   * Does the item have a color?
   *
   * @type {string}
   */
  color?: string;
}