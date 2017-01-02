import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DropdownModule } from 'ng2-bootstrap';
import { DropdownMultiselectComponent } from './components';

/**
 * Module to import dependencies for use of DropdownMultiselectComponent
 *
 * @export
 * @class DropdownMultiselectModule
 */
@NgModule({
    imports: [ CommonModule, FormsModule, DropdownModule.forRoot() ],
    declarations: [ DropdownMultiselectComponent ],
    exports: [ DropdownMultiselectComponent ]
})
export class DropdownMultiselectModule { }
