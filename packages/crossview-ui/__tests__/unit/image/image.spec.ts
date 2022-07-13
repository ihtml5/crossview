import { CrossViewUIImage } from '@/components/image';
import { CrossViewUIImage as CrossViewUIImageDefault} from '@/components/image/ui-image';

describe('crossview ui image', () => {
  it('exports the web component', () => {
    expect(CrossViewUIImage).toStrictEqual(CrossViewUIImageDefault);
  });
});
