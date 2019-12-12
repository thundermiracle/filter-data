import { listCombiner } from '../../src/lib/utils';

test('add element to list', () => {
  const input = [1];
  const result = listCombiner(input, 2);

  const expected = [1, 2];

  // list was mutated
  expect(input).toEqual(expected);
  expect(result).toEqual(expected);
});
