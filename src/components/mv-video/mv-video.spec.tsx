import { newSpecPage } from '@stencil/core/testing';
import { MvVideo } from './mv-video';

describe('mv-video', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MvVideo],
      html: `<mv-video></mv-video>`,
    });
    expect(page.root).toEqualHtml(`
      <mv-video>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mv-video>
    `);
  });
});
