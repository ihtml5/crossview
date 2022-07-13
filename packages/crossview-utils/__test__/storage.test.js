import { createStorage } from '@/utils/storage';


jest.mock('@/utils/storage', () => ({
  PREFIEX: '',
  createStorage() {
    return {
      setItem: jest.fn(),
      getItem: jest.fn(() => 123456),
      removeAll: jest.fn(),
      removeItem: jest.fn(),
    }
  }
}));

const storage = createStorage({ type: 'local' })
test('setItem', () => {
  storage.setItem('key', 123456)
  expect(storage.setItem).toHaveBeenCalled();
});
test('getItem', () => {
  expect(storage.getItem('key')).toBe(123456);
});
test('removeAll', () => {
  storage.removeAll('key', false)
  expect(storage.removeAll).toHaveBeenCalled();
});
test('removeItem', () => {
  storage.removeItem('key', 'abc')
  expect(storage.removeItem).toHaveBeenCalled();
});
