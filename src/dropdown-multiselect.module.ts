import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BsDropdownModule } from 'ng2-bootstrap';
import { DropdownMultiselectComponent } from './components';

/**
 * Module to import dependencies for use of DropdownMultiselectComponent
 *
 * @export
 * @class DropdownMultiselectModule
 */
@NgModule({
    imports: [ CommonModule, FormsModule, BsDropdownModule.forRoot() ],
    declarations: [ DropdownMultiselectComponent ],
    exports: [ DropdownMultiselectComponent ]
})
export class DropdownMultiselectModule { }
