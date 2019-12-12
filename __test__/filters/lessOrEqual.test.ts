import SearchType from '../../src/lib/SearchType';
import lessOrEqual from '../../src/filters/lessOrEqual';

const searchDataNumber = {
  fullName: 34123,
};

const searchDataString = {
  fullName: 'AbcdEfg',
};

const searchDataArray = {
  fullName: ['Ben', 'Jackson'],
};

describe('test caseSensitive flag', () => {
  test('caseSensitive=true(different alphabet case, compare to lowercase) -> true', () => {
    const result = lessOrEqual(
      {
        name: 'fullName',
        value: 'abcdEfg',
        type: SearchType.LT,
      },
      true,
      searchDataString,
    );

    expect(result).toBe(true);
  });

  test('caseSensitive=true(different alphabet case, compare to uppercase) -> false', () => {
    const result = lessOrEqual(
      {
        name: 'fullName',
        value: 'ABcdEfg',
        type: SearchType.LT,
      },
      true,
      searchDataString,
    );

    expect(result).toBe(false);
  });

  test('caseSensitive=true(same alphabet case, same string) -> true', () => {
    const result = lessOrEqual(
      {
        name: 'fullName',
        value: 'AbcdEfg',
        type: SearchType.GTE,
      },
      true,
      searchDataString,
    );

    expect(result).toBe(true);
  });
});

describe('test searchCondition', () => {
  test('different alphabet case is ignored(string same if caseInSensitive) -> true', () => {
    const result = lessOrEqual(
      {
        name: 'fullName',
        value: 'ABcdEfg',
        type: SearchType.LT,
      },
      false,
      searchDataString,
    );

    expect(result).toBe(true);
  });

  test('different alphabet case is ignored(string is bigger if caseSensitive) -> true', () => {
    const result = lessOrEqual(
      {
        name: 'fullName',
        value: 'ACcdEfg',
        type: SearchType.LT,
      },
      false,
      searchDataString,
    );

    expect(result).toBe(true);
  });

  test('different alphabet case is ignored(string is smaller if caseSensitive) -> false', () => {
    const result = lessOrEqual(
      {
        name: 'fullName',
        value: 'Abcdeff',
        type: SearchType.LT,
      },
      false,
      searchDataString,
    );

    expect(result).toBe(false);
  });

  test('target value is array -> false', () => {
    const result = lessOrEqual(
      {
        name: 'fullName',
        value: 'AbcdCfg',
        type: SearchType.LT,
      },
      false,
      searchDataArray,
    );

    expect(result).toBe(false);
  });

  test('target value is number(smaller) -> true', () => {
    const result = lessOrEqual(
      {
        name: 'fullName',
        value: 34223,
        type: SearchType.LT,
      },
      false,
      searchDataNumber,
    );

    expect(result).toBe(true);
  });

  test('target value is number(bigger) -> false', () => {
    const result = lessOrEqual(
      {
        name: 'fullName',
        value: 34023,
        type: SearchType.LT,
      },
      false,
      searchDataNumber,
    );

    expect(result).toBe(false);
  });

  test('target value is number(equal) -> true', () => {
    const result = lessOrEqual(
      {
        name: 'fullName',
        value: 34123,
        type: SearchType.LT,
      },
      false,
      searchDataNumber,
    );

    expect(result).toBe(true);
  });
});
