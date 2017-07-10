import { AugularLab1Page } from './app.po';

describe('augular-lab1 App', () => {
  let page: AugularLab1Page;

  beforeEach(() => {
    page = new AugularLab1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
