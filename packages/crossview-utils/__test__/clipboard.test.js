import { toCopy } from '@/utils/clipboard';

describe('测试：src/utils/clipboard/index', () => {
  test('toCopy: shoule return Boolean', () => {
    const test = toCopy('<div>test</div>');    
    expect(test).toBe(false);
    expect(toCopy('test')).toBe(false);
    expect(toCopy('')).toBe(false);
    expect(toCopy(222)).toBe(false);
  });
});
