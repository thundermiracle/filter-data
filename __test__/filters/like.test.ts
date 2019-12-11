import SearchType from '../../src/lib/SearchType';
import like from '../../src/filters/like';

const searchDataString = {
  fullName: 'Ben Jackson',
};

const searchDataArray = {
  fullName: ['Ben', 'Jackson'],
};

describe('test caseSensitive flag', () => {
  test('caseSensitive=true(partial same, different alphabet case) -> false', () => {
    const result = like(
      {
        name: 'fullName',
        value: 'jack',
        type: SearchType.LK,
      },
      true,
      searchDataString,
    );

    expect(result).toBe(false);
  });

  test('caseSensitive=true(full same, different alphabet case) -> false', () => {
    const result = like(
      {
        name: 'fullName',
        value: 'ben jackson',
        type: SearchType.LK,
      },
      true,
      searchDataString,
    );

    expect(result).toBe(false);
  });

  test('caseSensitive=true(partial same, same alphabet case) -> true', () => {
    const result = like(
      {
        name: 'fullName',
        value: 'Jack',
        type: SearchType.LK,
      },
      true,
      searchDataString,
    );

    expect(result).toBe(true);
  });

  test('caseSensitive=true(full same, same alphabet case) -> true', () => {
    const result = like(
      {
        name: 'fullName',
        value: 'Ben Jackson',
        type: SearchType.LK,
      },
      true,
      searchDataString,
    );

    expect(result).toBe(true);
  });
});

describe('test searchCondition', () => {
  test('partial same -> true', () => {
    const result = like(
      {
        name: 'fullName',
        value: 'jack',
        type: SearchType.LK,
      },
      false,
      searchDataString,
    );

    expect(result).toBe(true);
  });

  test('full same -> true', () => {
    const result = like(
      {
        name: 'fullName',
        value: 'ben jackson',
        type: SearchType.LK,
      },
      false,
      searchDataString,
    );

    expect(result).toBe(true);
  });

  test('value not exist -> false', () => {
    const result = like(
      {
        name: 'fullName',
        value: 'pack',
        type: SearchType.LK,
      },
      false,
      searchDataString,
    );

    expect(result).toBe(false);
  });

  test('target value is array -> false', () => {
    const result = like(
      {
        name: 'fullName',
        value: 'Jack',
        type: SearchType.LK,
      },
      false,
      searchDataArray,
    );

    expect(result).toBe(false);
  });
});
