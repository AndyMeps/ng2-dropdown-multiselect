import { Component } from '@angular/core';

import { IDropdownItem, IMultiselectConfig } from 'ng2-dropdown-multiselect';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public model: IDropdownItem[];

  public options: IMultiselectConfig;

  constructor() {

    this.model = [
      /*{
        id: 1,
        label: 'Item One'
      },
      {
        id: 2,
        label: 'Item Two'
      }*/
    ];

    this.options = {
      allSelected: true,
      showCheckAll: true,
      showUncheckAll: true
    };

  }

  public pushNew() {
    let id = Math.random();
    this.model.push(
      {
        id: id,
        label: id.toString(),
        selected: true
      }
    )
  }
}
