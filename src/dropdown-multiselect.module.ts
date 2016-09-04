import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ng2-bootstrap';
import { DropdownMultiselectComponent } from './components';

/**
 * Module to import dependencies for use of DropdownMultiselectComponent
 * 
 * @export
 * @class DropdownMultiselectModule
 */
@NgModule({
    imports: [ CommonModule, DropdownModule ],
    declarations: [ DropdownMultiselectComponent ],
    exports: [ DropdownMultiselectComponent ]
})
export class DropdownMultiselectModule { }
