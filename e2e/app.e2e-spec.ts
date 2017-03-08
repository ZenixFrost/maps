import { GoogleMapPage } from './app.po';

describe('google-map App', () => {
  let page: GoogleMapPage;

  beforeEach(() => {
    page = new GoogleMapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
