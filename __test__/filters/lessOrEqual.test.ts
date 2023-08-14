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

const searchDataDate = {
  birthday: '2012-03-24',
};

describe('test caseSensitive flag', () => {
  test('caseSensitive=true(different alphabet case, compare to lowercase) -> true', () => {
    const result = lessOrEqual(
      {
        key: 'fullName',
        value: 'abcdEfg',
        type: SearchType.LTE,
      },
      true,
      searchDataString,
    );

    expect(result).toBe(true);
  });

  test('caseSensitive=true(different alphabet case, compare to uppercase) -> false', () => {
    const result = lessOrEqual(
      {
        key: 'fullName',
        value: 'ABcdEfg',
        type: SearchType.LTE,
      },
      true,
      searchDataString,
    );

    expect(result).toBe(false);
  });

  test('caseSensitive=true(same alphabet case, same string) -> true', () => {
    const result = lessOrEqual(
      {
        key: 'fullName',
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
        key: 'fullName',
        value: 'ABcdEfg',
        type: SearchType.LTE,
      },
      false,
      searchDataString,
    );

    expect(result).toBe(true);
  });

  test('different alphabet case is ignored(string is bigger if caseSensitive) -> true', () => {
    const result = lessOrEqual(
      {
        key: 'fullName',
        value: 'ACcdEfg',
        type: SearchType.LTE,
      },
      false,
      searchDataString,
    );

    expect(result).toBe(true);
  });

  test('different alphabet case is ignored(string is smaller if caseSensitive) -> false', () => {
    const result = lessOrEqual(
      {
        key: 'fullName',
        value: 'Abcdeff',
        type: SearchType.LTE,
      },
      false,
      searchDataString,
    );

    expect(result).toBe(false);
  });

  test('target value is array -> false', () => {
    const result = lessOrEqual(
      {
        key: 'fullName',
        value: 'AbcdCfg',
        type: SearchType.LTE,
      },
      false,
      searchDataArray,
    );

    expect(result).toBe(false);
  });

  test('target value is number(smaller) -> true', () => {
    const result = lessOrEqual(
      {
        key: 'fullName',
        value: 34223,
        type: SearchType.LTE,
      },
      false,
      searchDataNumber,
    );

    expect(result).toBe(true);
  });

  test('target value is number(bigger) -> false', () => {
    const result = lessOrEqual(
      {
        key: 'fullName',
        value: 34023,
        type: SearchType.LTE,
      },
      false,
      searchDataNumber,
    );

    expect(result).toBe(false);
  });

  test('target value is number(equal) -> true', () => {
    const result = lessOrEqual(
      {
        key: 'fullName',
        value: 34123,
        type: SearchType.LTE,
      },
      false,
      searchDataNumber,
    );

    expect(result).toBe(true);
  });

  test('target value is Date string same -> true', () => {
    const result = lessOrEqual(
      {
        key: 'birthday',
        value: new Date('2012-03-24'),
        type: SearchType.LTE,
      },
      false,
      searchDataDate,
    );

    expect(result).toBe(true);
  });

  test('target value is Date string -> false', () => {
    const result = lessOrEqual(
      {
        key: 'birthday',
        value: new Date('2011-05-15'),
        type: SearchType.LTE,
      },
      false,
      searchDataDate,
    );

    expect(result).toBe(false);
  });

  test('target value is Date string -> true', () => {
    const result = lessOrEqual(
      {
        key: 'birthday',
        value: new Date('2015-05-15'),
        type: SearchType.LTE,
      },
      false,
      searchDataDate,
    );

    expect(result).toBe(true);
  });
});
