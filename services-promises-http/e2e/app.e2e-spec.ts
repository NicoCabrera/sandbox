import { ServicesPromisesHttpPage } from './app.po';

describe('services-promises-http App', () => {
  let page: ServicesPromisesHttpPage;

  beforeEach(() => {
    page = new ServicesPromisesHttpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
