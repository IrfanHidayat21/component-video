import { newE2EPage } from '@stencil/core/testing';

describe('mv-video', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mv-video></mv-video>');

    const element = await page.find('mv-video');
    expect(element).toHaveClass('hydrated');
  });
});
