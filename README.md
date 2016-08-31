# ng2-dropdown-multiselect

Simple multiselect dropdown plugin for Angular 2.

# This module is still a WIP and this documentation may be ahead of or behind the codebase.

## Dependencies

The module relies on `ng2-bootstrap` for dropdown functionality.
Icon fonts can be interchanged, by default `ng2-dropdown-multiselect` uses default checkboxes.

## Installation

To include in your project install via NPM with:

```
npm install --save ng2-dropdown-multiselect
```

You will then need to include the module to your app.module.ts:

```typescript
import { DropdownMultiselectModule } from 'ng2-dropdown-multiselect';

// ...

@NgModule({
    imports: [
        DropdownMultiselectModule
    ]
})
// ...
```

Finally, include the component in your component HTML as per the next section.

## HTML Component Markup

Once the module is installed, you will need to add HTML markup to include the dropdown in a component. 
The minimum requirement is a [dropdown-model] attribute inside the element:

```html5
<dropdown-multiselect 
    [dropdown-model]="">
</dropdown-multiselect>
```

The `[dropdown-model]` attribute expects an array of objects to represent the dropdown options, this array should include the following properties:

| Property | Type | Required | Description |
| -------- | ---- | -------- | ----------- |
| id | `any` | **Yes** | A unique key for this option. |
| label | `string` | **Yes** | A user friendly description. |
| selected | `boolean` | No | Whether the option is selected by default. |
| color | `string` | No | A hex color value, if provided a color tile will appear to the left of the label |

To aid in development, `ng2-dropdown-multiselect` exposes a TypeScript interface for the object properties, this can be referenced as a type in your component by importing it:

```typescript
import { IDropdownItem } from 'ng2-dropdown-multiselect';
```

Which can then be used as the type of the model object:
```typescript
public dropdownModel: IDropdownItem[];

ngOnInit() {
    this.dropdownModel = [
        {
            id: 1,
            label: 'Today',
            selected: false, // optional
            color: '#336699' // optional
        }
        // ...
    ];
}
```

You can then reference the component's model property in the `[dropdown-model]` attribute:

```html5
<dropdown-multiselect 
    [dropdown-model]="dropdownModel">
</dropdown-multiselect>
```

It is possible to configure `ng2-dropdown-multiselect` by providing a configuration object to 
the `[dropdown-options]` attribute (see the next section for more details on this object):

```html5
<dropdown-multiselect 
    [dropdown-model]="dropdownModel" 
    [dropdown-options]="dropdownOptions">
</dropdown-multiselect>
```


## Configuration

`ng2-dropdown-multiselect` exposes an interface to provide an indication of valid configuration properties, 
this can be references as a type for your configuration object by importing it:

```typescript
import { IMultiselectOptions } from 'ng2-dropdown-multiselect';
``` 

Which can then be used as the configuration object type in your component:

```typescript
public dropdownConfiguration: IMultiselectOptions;
```

Current list of configuration options, types and default values

| Property | Type | Default | Description |
| -------- | ---- | ------- | ----------- |
| defaultButtonText | `string` | 'Selected' | Displayed when the `maxInline` threshold is exceeded or 0 options are selected. |
| allSelected | `boolean` | false | Select all options when the component is rendered. |
| maxInline | `number` | 3 | The max number of selected options that will display in the button. |
| showCheckAll | `boolean` | false | Display a 'Check All' option at the top of the dropdown. |
| showUncheckAll | `boolean` | false | Display a 'Uncheck All' option at the top of the dropdown. |
| buttonClasses | `string[]` | ['btn', 'btn-default'] | Array of classes added to the control button. |