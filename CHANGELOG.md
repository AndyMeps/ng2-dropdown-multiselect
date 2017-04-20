<a name="1.2.0"></a>
# [1.2.0](https://github.com/andymeps/ng2-dropdown-multiselect/compare/v1.1.0...v1.2.0) (2017-04-20)

### Bug Fixes

* Fixed #9, #12 with a move to NG4 and upgrade to ngx-bootstrap
* Resolved issues with AoT compilation.

### Notes

* This version now supports the current version of @angular and ngx-bootstrap
* I have reconfigured the dependencies to prevent breaking changes from working their way in in future.
* No major changes to codebase but should be upgraded to with care, `lib` directory has been renamed `dist` and will be removed entirely in the next minor revision to simplify SystemJS integration.

<a name="1.1.0"></a>
# [1.1.0](https://github.com/andymeps/ng2-dropdown-multiselect/compare/v1.0.0...v1.1.0) (2017-01-02)

### Bug Fixes

* Fix for #8 - migrated to latest version of angular 2 and ng2-bootstrap to resolve issue with bad version of ng2-bootstrap.

### Notes

* Migrated library to the latest version of angular 2 and ng2-bootstrap

### Notes


<a name="1.0.0"></a>
# [1.0.0](https://github.com/andymeps/ng2-dropdown-multiselect/compare/v0.1.9...v1.0.0) (2016-12-02)

### Notes

* Refactored the dropdown component to make use of more syntactic sugar to help tidy up the code.
* Bumped to `1.0.0` as this library is now being used in production environments.

<a name="0.3.3"></a>
# [0.3.3](https://github.com/andymeps/ng2-dropdown-multiselect/compare/v0.3.2...v0.3.3) (2016-11-18)

### Bug Fixes

* Fixed [#6](https://github.com/AndyMeps/ng2-dropdown-multiselect/issues/6), added implementation for
`ngModelChange`, missing calls from the component.

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
