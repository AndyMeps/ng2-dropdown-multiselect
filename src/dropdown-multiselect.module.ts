import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DROPDOWN_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import { DropdownMultiselectComponent } from './components';

/**
 * Module to import dependencies for use of DropdownMultiselectComponent
 * 
 * @export
 * @class DropdownMultiselectModule
 */
@NgModule({
    imports: [ CommonModule ],
    declarations: [ DropdownMultiselectComponent, DROPDOWN_DIRECTIVES ],
    exports: [ DropdownMultiselectComponent, DROPDOWN_DIRECTIVES ]
})
export class DropdownMultiselectModule { }
