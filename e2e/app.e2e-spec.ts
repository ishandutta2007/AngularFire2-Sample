import { Sample3Page } from './app.po';

describe('sample3 App', function() {
  let page: Sample3Page;

  beforeEach(() => {
    page = new Sample3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
