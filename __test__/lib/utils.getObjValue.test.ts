import { getObjValue } from '../../src/lib/utils';

import type { DataObjectWithNull } from '../../src/lib/types';

const data: DataObjectWithNull = {
  name: 'John',
  address: null,
  father: {
    name: 'Jack',
    age: 50,
  },
};

test('key is not exist', () => {
  expect(getObjValue(data, 'notExist')).toBeUndefined();
  expect(getObjValue(data, ['father', 'notExist'])).toBeUndefined();
});

test('key is string', () => {
  expect(getObjValue(data, 'name')).toBe('John');
  expect(getObjValue(data, 'address')).toBeNull();
  expect(getObjValue(data, 'father.name')).toBe('Jack');
});

test('key is string[]', () => {
  expect(getObjValue(data, ['name'])).toBe('John');
  expect(getObjValue(data, ['address'])).toBeNull();
  expect(getObjValue(data, ['father', 'name'])).toBe('Jack');
});
