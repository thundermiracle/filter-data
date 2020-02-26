import * as utils from '../../src/lib/utils';

import filterData from '../../src/filterData';
import data from './data.json';
import SearchType from '../../src/lib/SearchType';

describe('includeNull', () => {
  test('includeNull=true', () => {
    const searchConditions = [
      {
        key: 'name',
        value: 'not exist',
        type: SearchType.EQ,
      },
    ];

    const result = filterData(data, searchConditions, { includeNull: true });

    expect(result).toEqual([
      {
        noName: 'no name error',
      },
    ]);
  });

  test('includeNull=false', () => {
    const searchConditions = [
      {
        key: 'name',
        value: 'not exist',
        type: SearchType.EQ,
      },
    ];

    const result = filterData(data, searchConditions, { includeNull: false });

    expect(result).toEqual([]);
  });
});

describe('like search', () => {
  test('caseSensitive=false', () => {
    const searchConditions = [
      {
        key: 'name',
        value: 'dav',
        type: SearchType.LK,
      },
    ];

    const result = filterData(data, searchConditions);

    expect(result).toEqual([
      {
        name: 'David Johnson',
        middleName: 'Davjohn',
        age: 32,
      },
    ]);
  });

  test('caseSensitive=true(not exist)', () => {
    const searchConditions = [
      {
        key: 'name',
        value: 'dav',
        type: SearchType.LK,
      },
    ];

    const result = filterData(data, searchConditions, { caseSensitive: true });

    expect(result).toEqual([]);
  });

  test('caseSensitive=true(exist)', () => {
    const searchConditions = [
      {
        key: 'name',
        value: 'Dav',
        type: SearchType.LK,
      },
    ];

    const result = filterData(data, searchConditions, { caseSensitive: true });

    expect(result).toEqual([
      {
        name: 'David Johnson',
        middleName: 'Davjohn',
        age: 32,
      },
    ]);
  });
});

describe('key is string[]', () => {
  test('or search have result', () => {
    const searchConditions = [
      {
        key: ['name', 'middleName'],
        value: 'ichj',
        type: SearchType.LK,
      },
    ];

    const result = filterData(data, searchConditions);

    expect(result).toEqual([
      {
        name: 'Michael Johnson',
        middleName: 'Michjohn',
        age: 37,
      },
    ]);
  });

  test('or search have nothing', () => {
    const searchConditions = [
      {
        key: ['name', 'middleName'],
        value: 'Japan',
        type: SearchType.LK,
      },
    ];

    const result = filterData(data, searchConditions);

    expect(result).toEqual([]);
  });
});

describe('area search', () => {
  test('greater than + less than', () => {
    const searchConditions = [
      {
        key: 'age',
        value: 25,
        type: SearchType.GT,
      },
      {
        key: 'age',
        value: 34,
        type: SearchType.LTE,
      },
    ];

    const result = filterData(data, searchConditions);

    expect(result).toEqual([
      {
        name: 'David Johnson',
        middleName: 'Davjohn',
        age: 32,
      },
    ]);
  });
});

describe('offset, limit', () => {
  test('offset is undefined, limit 1', () => {
    const searchConditions = [
      {
        key: 'age',
        value: 20,
        type: SearchType.GT,
      },
    ];

    const result = filterData(data, searchConditions, { limit: 1 });

    expect(result).toEqual([
      {
        name: 'Anny Johnson',
        middleName: 'Anjohn',
        age: 21,
      },
      {
        name: 'David Johnson',
        middleName: 'Davjohn',
        age: 32,
      },
      {
        name: 'Michael Johnson',
        middleName: 'Michjohn',
        age: 37,
      },
    ]);
  });

  test('limit is undefined, offset 2', () => {
    const searchConditions = [
      {
        key: 'age',
        value: 20,
        type: SearchType.GT,
      },
    ];

    const result = filterData(data, searchConditions, { offset: 2 });

    expect(result).toEqual([
      {
        name: 'Anny Johnson',
        middleName: 'Anjohn',
        age: 21,
      },
      {
        name: 'David Johnson',
        middleName: 'Davjohn',
        age: 32,
      },
      {
        name: 'Michael Johnson',
        middleName: 'Michjohn',
        age: 37,
      },
    ]);
  });

  test('offset 2, limit 1', () => {
    const searchConditions = [
      {
        key: 'age',
        value: 20,
        type: SearchType.GT,
      },
    ];

    const result = filterData(data, searchConditions, { offset: 2, limit: 1 });

    expect(result).toEqual([
      {
        name: 'Michael Johnson',
        middleName: 'Michjohn',
        age: 37,
      },
    ]);
  });

  test('offset 2, limit 10 -> return 2~last', () => {
    const searchConditions = [
      {
        key: 'age',
        value: 20,
        type: SearchType.GT,
      },
    ];

    const result = filterData(data, searchConditions, { offset: 2, limit: 10 });

    expect(result).toEqual([
      {
        name: 'Michael Johnson',
        middleName: 'Michjohn',
        age: 37,
      },
    ]);
  });

  test('offset 10, limit 1 -> []', () => {
    const searchConditions = [
      {
        key: 'age',
        value: 20,
        type: SearchType.GT,
      },
    ];

    const result = filterData(data, searchConditions, { offset: 10, limit: 1 });

    expect(result).toEqual([]);
  });
});

describe('no available SearchConditions should return immediately', () => {
  // const currySpy = jest.spyOn(utils, 'curry');

  test('value is empty, null, undefined', () => {
    const searchConditions = [
      {
        key: 'name',
        value: '',
        type: SearchType.LK,
      },
      {
        key: 'name',
        value: undefined,
        type: SearchType.LK,
      },
    ];

    const result = filterData(data, searchConditions);

    expect(result).toEqual(data);
  });

  test('mixed value with empty string and exist one', () => {
    const searchConditions = [
      {
        key: 'middleName',
        value: '',
        type: SearchType.LK,
      },
      {
        key: 'name',
        value: 'Dav',
        type: SearchType.LK,
      },
    ];

    const result = filterData(data, searchConditions, { caseSensitive: true });

    // expect(currySpy).toHaveBeenCalledTimes(1);

    expect(result).toEqual([
      {
        name: 'David Johnson',
        middleName: 'Davjohn',
        age: 32,
      },
    ]);
  });
});

describe('key is not exist', () => {
  test('key is not exist only', () => {
    const searchConditions = [
      {
        key: 'name1',
        value: 'D',
        type: SearchType.LK,
      },
    ];

    const result = filterData(data, searchConditions, { includeNull: true });

    expect(result).toEqual(data);
  });
});
