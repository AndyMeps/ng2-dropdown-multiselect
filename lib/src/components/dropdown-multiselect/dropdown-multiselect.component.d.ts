import { OnInit, EventEmitter } from '@angular/core';
import { IDropdownOption } from '../../interfaces/dropdown-option.interface';
import { IMultiselectOptions } from '../../interfaces/multiselect-options.interface';
import { MultiselectConfig } from '../../models/multiselect-config.model';
export declare class DropdownMultiselectComponent implements OnInit {
    opts: IMultiselectOptions;
    model: IDropdownOption[];
    onChange: EventEmitter<any>;
    config: MultiselectConfig;
    selectedLength: number;
    constructor();
    ngOnInit(): void;
    toggleRow: (row: IDropdownOption) => void;
    uncheckAll: () => void;
    checkAll: () => void;
    private _getSelectedLength;
    private _processOptions;
    private _setSelectedTo;
    private _onChange;
}
