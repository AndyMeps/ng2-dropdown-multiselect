<a name="0.3.2"></a>
# [0.3.2](https://github.com/andymeps/ng2-dropdown-multiselect/compare/v0.3.1...v0.3.2) (2016-11-16)

### Bug Fixes

* Fixed [#5](https://github.com/AndyMeps/ng2-dropdown-multiselect/issues/5), `checkAll()` was firing
when `allSelected` config property was present, not just when `allSelected == true`

<a name="0.3.1"></a>
# [0.3.1](https://github.com/andymeps/ng2-dropdown-multiselect/compare/v0.3.0...v0.3.1) (2016-09-30)

### Notes

* Small change to add in `bump:patch`, `bump:minor` and `bump:major` npm commands.

<a name="0.3.0"></a>
# [0.3.0](https://github.com/andymeps/ng2-dropdown-multiselect/compare/v0.2.2...v0.3.0) (2016-09-30)

### Breaking Changes

* Renamed config input to `dropdownConfig` from `dropdown-config` to match best practices.

### Notes

* Updated CHANGELOG.md for 0.2.x versions of the library.

<a name="0.2.2"></a>
# [0.2.2](https://github.com/andymeps/ng2-dropdown-multiselect/compare/v0.2.0...v0.2.2) (2016-09-29)

### Bug Fixes

* Removed older versions of NPM from TravisCI, only supporting v6
* My previous fix for es5 tsconfig didn't include everything, should be working now.

<a name="0.2.1"></a>
# [0.2.1](https://github.com/andymeps/ng2-dropdown-multiselect/compare/v0.2.0...v0.2.1) (2016-09-29)

### New

* Scrollable dropdown menu

### Bug Fixes

* Changed tsconfig.json to support es5.

### Notes

* Updated README.md to include badges and image of control.
* Fixed TravisCI build

<a name="0.2.0"></a>
## [0.2.0](https://github.com/andymeps/ng2-dropdown-multiselect/compare/v0.1.12...v0.2.0) (2016-09-15)

### Bug Fixes

* **demo:** added in demo site for testing [#2] part fix
* **config:** seem to have resolved [#4]

### Breaking Changes

* Using ngModel over custom property, much better functionality.
* Use (ngModelChange) instead of onChange to catch onChange as before.

### Notes

* Slight structure change to source code
* Added in tslint, added `npm run lint:ts` command
