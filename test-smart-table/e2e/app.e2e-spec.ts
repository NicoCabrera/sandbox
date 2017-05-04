import { TestSmartTablePage } from './app.po';

describe('test-smart-table App', () => {
  let page: TestSmartTablePage;

  beforeEach(() => {
    page = new TestSmartTablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
