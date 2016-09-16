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
      {
        id: 1,
        label: 'Charmander'
      },
      {
        id: 2,
        label: 'Charmeleon'
      },
      {
        id: 3,
        label: 'Charizard'
      },
      {
        id: 4,
        label: 'Bulbasaur'
      },
      {
        id: 5,
        label: 'Ivysaur'
      },
      {
        id: 6,
        label: 'Venusaur'
      },
      {
        id: 7,
        label: 'Squirtle'
      },
      {
        id: 8,
        label: 'Wartortle'
      },
      {
        id: 9,
        label: 'Blastoise'
      }
    ];

    this.options = {
      allSelected: true,
      showCheckAll: true,
      showUncheckAll: true,
      checkClasses: ['fa', 'fa-fw', 'fa-check'],
      uncheckClasses: ['fa', 'fa-fw', 'fa-times'],
      scrollingHeight: 200
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
