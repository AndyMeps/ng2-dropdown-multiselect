import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownMultiselectComponent } from './components';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ DropdownMultiselectComponent ],
    exports: [ DropdownMultiselectComponent ]
})
export class DropdownMultiselectModule { }
