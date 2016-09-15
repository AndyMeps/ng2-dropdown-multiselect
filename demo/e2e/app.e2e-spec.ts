import { Ng2DropdownMultiselectDemoPage } from './app.po';

describe('ng2-dropdown-multiselect-demo App', function() {
  let page: Ng2DropdownMultiselectDemoPage;

  beforeEach(() => {
    page = new Ng2DropdownMultiselectDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
