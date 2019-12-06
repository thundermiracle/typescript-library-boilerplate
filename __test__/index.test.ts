import Add from '../src/index';

test('add', () => {
  const result = Add(1, 2);

  expect(result).toBe(3);
});
