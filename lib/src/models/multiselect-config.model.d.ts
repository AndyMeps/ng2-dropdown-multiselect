import { IMultiselectOptions } from '../interfaces/multiselect-options.interface';
export declare class MultiselectConfig implements IMultiselectOptions {
    buttonLabel: string;
    allSelected: boolean;
    maxInline: number;
    showCheckAll: boolean;
    showUncheckAll: boolean;
    constructor();
}
