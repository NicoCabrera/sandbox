import { BuildInAngularDirectivesPage } from './app.po';

describe('build-in-angular-directives App', () => {
  let page: BuildInAngularDirectivesPage;

  beforeEach(() => {
    page = new BuildInAngularDirectivesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
