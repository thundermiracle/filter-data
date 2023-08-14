import SearchType from '../../src/lib/SearchType';
import greaterOrEqual from '../../src/filters/greaterOrEqual';

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
  test('caseSensitive=true(different alphabet case, compare to lowercase) -> false', () => {
    const result = greaterOrEqual(
      {
        key: 'fullName',
        value: 'abcdEfg',
        type: SearchType.GTE,
      },
      true,
      searchDataString,
    );

    expect(result).toBe(false);
  });

  test('caseSensitive=true(different alphabet case, compare to uppercase) -> true', () => {
    const result = greaterOrEqual(
      {
        key: 'fullName',
        value: 'ABcdEfg',
        type: SearchType.GTE,
      },
      true,
      searchDataString,
    );

    expect(result).toBe(true);
  });

  test('caseSensitive=true(same alphabet case, same string) -> true', () => {
    const result = greaterOrEqual(
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
    const result = greaterOrEqual(
      {
        key: 'fullName',
        value: 'ABcdEfg',
        type: SearchType.GTE,
      },
      false,
      searchDataString,
    );

    expect(result).toBe(true);
  });

  test('different alphabet case is ignored(string is bigger if caseSensitive) -> false', () => {
    const result = greaterOrEqual(
      {
        key: 'fullName',
        value: 'ACcdEfg',
        type: SearchType.GTE,
      },
      false,
      searchDataString,
    );

    expect(result).toBe(false);
  });

  test('different alphabet case is ignored(string is smaller if caseSensitive) -> true', () => {
    const result = greaterOrEqual(
      {
        key: 'fullName',
        value: 'Abcdeff',
        type: SearchType.GTE,
      },
      false,
      searchDataString,
    );

    expect(result).toBe(true);
  });

  test('target value is array', () => {
    const result = greaterOrEqual(
      {
        key: 'fullName',
        value: 'AbcdCfg',
        type: SearchType.GTE,
      },
      false,
      searchDataArray,
    );

    expect(result).toBe(false);
  });

  test('target value is number(smaller) -> false', () => {
    const result = greaterOrEqual(
      {
        key: 'fullName',
        value: 34223,
        type: SearchType.GTE,
      },
      false,
      searchDataNumber,
    );

    expect(result).toBe(false);
  });

  test('target value is number(bigger) -> true', () => {
    const result = greaterOrEqual(
      {
        key: 'fullName',
        value: 34023,
        type: SearchType.GTE,
      },
      false,
      searchDataNumber,
    );

    expect(result).toBe(true);
  });

  test('target value is number(equal) -> true', () => {
    const result = greaterOrEqual(
      {
        key: 'fullName',
        value: 34123,
        type: SearchType.GTE,
      },
      false,
      searchDataNumber,
    );

    expect(result).toBe(true);
  });

  test('target value is Date string same -> true', () => {
    const result = greaterOrEqual(
      {
        key: 'birthday',
        value: new Date('2012-03-24'),
        type: SearchType.GT,
      },
      false,
      searchDataDate,
    );

    expect(result).toBe(true);
  });

  test('target value is Date string -> true', () => {
    const result = greaterOrEqual(
      {
        key: 'birthday',
        value: new Date('2015-05-15'),
        type: SearchType.GT,
      },
      false,
      searchDataDate,
    );

    expect(result).toBe(true);
  });

  test('target value is Date string -> false', () => {
    const result = greaterOrEqual(
      {
        key: 'birthday',
        value: new Date('2011-05-15'),
        type: SearchType.GT,
      },
      false,
      searchDataDate,
    );

    expect(result).toBe(false);
  });
});
