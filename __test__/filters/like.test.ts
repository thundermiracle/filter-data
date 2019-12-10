import SearchType from '../../src/lib/SearchType';
import like from '../../src/filters/like';

const searchDataString = {
  fullName: 'Ben Jackson',
};

const searchDataArray = {
  fullName: ['Ben', 'Jackson'],
};

describe('test includeNull flag', () => {
  test('includeNull=false', () => {
    const result = like(
      {
        name: 'fullNameNotExist',
        value: 'jack',
        type: SearchType.LK,
      },
      false,
      false,
      searchDataString,
    );

    expect(result).toBe(false);
  });

  test('includeNull=true', () => {
    const result = like(
      {
        name: 'fullName',
        value: 'jack',
        type: SearchType.LK,
      },
      true,
      false,
      searchDataString,
    );

    expect(result).toBe(true);
  });
});

describe('test caseSensitive flag', () => {
  test('caseSensitive=false', () => {
    const result = like(
      {
        name: 'fullName',
        value: 'jack',
        type: SearchType.LK,
      },
      false,
      false,
      searchDataString,
    );

    expect(result).toBe(true);
  });

  test('caseSensitive=true(not exist)', () => {
    const result = like(
      {
        name: 'fullName',
        value: 'jack',
        type: SearchType.LK,
      },
      false,
      true,
      searchDataString,
    );

    expect(result).toBe(false);
  });

  test('caseSensitive=true(exist)', () => {
    const result = like(
      {
        name: 'fullName',
        value: 'Jack',
        type: SearchType.LK,
      },
      false,
      true,
      searchDataString,
    );

    expect(result).toBe(true);
  });
});

describe('test searchCondition', () => {
  test('value not exist', () => {
    const result = like(
      {
        name: 'fullName',
        value: 'pack',
        type: SearchType.LK,
      },
      false,
      false,
      searchDataString,
    );

    expect(result).toBe(false);
  });

  test('target value is array', () => {
    const result = like(
      {
        name: 'fullName',
        value: 'Jack',
        type: SearchType.LK,
      },
      false,
      false,
      searchDataArray,
    );

    expect(result).toBe(false);
  });
});
