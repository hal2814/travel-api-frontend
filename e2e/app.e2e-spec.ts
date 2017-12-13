import { TravelApiFrontendPage } from './app.po';

describe('travel-api-frontend App', () => {
  let page: TravelApiFrontendPage;

  beforeEach(() => {
    page = new TravelApiFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
