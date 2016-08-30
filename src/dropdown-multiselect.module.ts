import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DROPDOWN_DIRECTIVES, DATEPICKER_DIRECTIVES, MODAL_DIRECTIVES } from 'ng2-bootstrap';

import { DropdownMultiselectComponent } from './dropdown-multiselect.component';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ DROPDOWN_DIRECTIVES, DATEPICKER_DIRECTIVES, MODAL_DIRECTIVES, DropdownMultiselectComponent ],
    exports: [ DROPDOWN_DIRECTIVES, DATEPICKER_DIRECTIVES, MODAL_DIRECTIVES, DropdownMultiselectComponent ]
})
export class DropdownMultiselectModule { }
