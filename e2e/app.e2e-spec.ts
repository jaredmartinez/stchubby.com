import { StchubbyNg2Page } from './app.po';

describe('stchubby-ng2 App', function() {
  let page: StchubbyNg2Page;

  beforeEach(() => {
    page = new StchubbyNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
