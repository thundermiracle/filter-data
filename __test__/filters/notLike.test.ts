import SearchType from '../../src/lib/SearchType';
import notLike from '../../src/filters/notLike';

const searchDataString = {
  fullName: 'Ben Jackson',
};

const searchDataArray = {
  fullName: ['Ben', 'Jackson'],
};

describe('test caseSensitive flag', () => {
  test('caseSensitive=true(partial same, different alphabet case) -> true', () => {
    const result = notLike(
      {
        name: 'fullName',
        value: 'jack',
        type: SearchType.NLK,
      },
      true,
      searchDataString,
    );

    expect(result).toBe(true);
  });

  test('caseSensitive=true(full same, different alphabet case) -> true', () => {
    const result = notLike(
      {
        name: 'fullName',
        value: 'ben jackson',
        type: SearchType.NLK,
      },
      true,
      searchDataString,
    );

    expect(result).toBe(true);
  });

  test('caseSensitive=true(partial same, same alphabet case) -> false', () => {
    const result = notLike(
      {
        name: 'fullName',
        value: 'Jack',
        type: SearchType.NLK,
      },
      true,
      searchDataString,
    );

    expect(result).toBe(false);
  });

  test('caseSensitive=true(full same, same alphabet case) -> false', () => {
    const result = notLike(
      {
        name: 'fullName',
        value: 'Ben Jackson',
        type: SearchType.NLK,
      },
      true,
      searchDataString,
    );

    expect(result).toBe(false);
  });
});

describe('test searchCondition', () => {
  test('partial same -> false', () => {
    const result = notLike(
      {
        name: 'fullName',
        value: 'jack',
        type: SearchType.NLK,
      },
      false,
      searchDataString,
    );

    expect(result).toBe(false);
  });

  test('full same -> false', () => {
    const result = notLike(
      {
        name: 'fullName',
        value: 'ben jackson',
        type: SearchType.NLK,
      },
      false,
      searchDataString,
    );

    expect(result).toBe(false);
  });

  test('value not exist -> true', () => {
    const result = notLike(
      {
        name: 'fullName',
        value: 'pack',
        type: SearchType.NLK,
      },
      false,
      searchDataString,
    );

    expect(result).toBe(true);
  });

  test('target value is array -> false', () => {
    const result = notLike(
      {
        name: 'fullName',
        value: 'Jack',
        type: SearchType.NLK,
      },
      false,
      searchDataArray,
    );

    expect(result).toBe(false);
  });
});
