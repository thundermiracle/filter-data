import SearchType from '../../src/lib/SearchType';
import greater from '../../src/filters/greater';

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
  test('return false if key is incorrect', () => {
    const result = greater(
      {
        key: 'notExist',
        value: 'Ben',
        type: SearchType.GT,
      },
      true,
      searchDataString,
    );

    expect(result).toBe(false);
  });

  test('caseSensitive=true(different alphabet case, compare to lowercase) -> false', () => {
    const result = greater(
      {
        key: 'fullName',
        value: 'abcdEfg',
        type: SearchType.GT,
      },
      true,
      searchDataString,
    );

    expect(result).toBe(false);
  });

  test('caseSensitive=true(different alphabet case, compare to uppercase) -> true', () => {
    const result = greater(
      {
        key: 'fullName',
        value: 'ABcdEfg',
        type: SearchType.GT,
      },
      true,
      searchDataString,
    );

    expect(result).toBe(true);
  });
});

describe('test searchCondition', () => {
  test('different alphabet case is ignored(string same if caseInSensitive) -> false', () => {
    const result = greater(
      {
        key: 'fullName',
        value: 'ABcdEfg',
        type: SearchType.GT,
      },
      false,
      searchDataString,
    );

    expect(result).toBe(false);
  });

  test('different alphabet case is ignored(string is bigger if caseSensitive) -> false', () => {
    const result = greater(
      {
        key: 'fullName',
        value: 'ACcdEfg',
        type: SearchType.GT,
      },
      false,
      searchDataString,
    );

    expect(result).toBe(false);
  });

  test('different alphabet case is ignored(string is smaller if caseSensitive) -> true', () => {
    const result = greater(
      {
        key: 'fullName',
        value: 'Abcdeff',
        type: SearchType.GT,
      },
      false,
      searchDataString,
    );

    expect(result).toBe(true);
  });

  test('target value is array', () => {
    const result = greater(
      {
        key: 'fullName',
        value: 'AbcdCfg',
        type: SearchType.GT,
      },
      false,
      searchDataArray,
    );

    expect(result).toBe(false);
  });

  test('target value is number(smaller) -> false', () => {
    const result = greater(
      {
        key: 'fullName',
        value: 34223,
        type: SearchType.GT,
      },
      false,
      searchDataNumber,
    );

    expect(result).toBe(false);
  });

  test('target value is number(bigger) -> true', () => {
    const result = greater(
      {
        key: 'fullName',
        value: 34023,
        type: SearchType.GT,
      },
      false,
      searchDataNumber,
    );

    expect(result).toBe(true);
  });

  test('target value is number(equal) -> false', () => {
    const result = greater(
      {
        key: 'fullName',
        value: 34123,
        type: SearchType.GT,
      },
      false,
      searchDataNumber,
    );

    expect(result).toBe(false);
  });

  test('target value is Date string same -> false', () => {
    const result = greater(
      {
        key: 'birthday',
        value: new Date('2012-03-24'),
        type: SearchType.GT,
      },
      false,
      searchDataDate,
    );

    expect(result).toBe(false);
  });

  test('target value is Date string -> true', () => {
    const result = greater(
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
    const result = greater(
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
