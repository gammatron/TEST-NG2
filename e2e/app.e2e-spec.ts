import { TESTNG2Page } from './app.po';

describe('test-ng2 App', () => {
  let page: TESTNG2Page;

  beforeEach(() => {
    page = new TESTNG2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
