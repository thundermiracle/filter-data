import SearchType from '../../src/lib/SearchType';
import less from '../../src/filters/less';

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
    const result = less(
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
    const result = less(
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
});

describe('test searchCondition', () => {
  test('different alphabet case is ignored(string same if caseInSensitive) -> false', () => {
    const result = less(
      {
        name: 'fullName',
        value: 'ABcdEfg',
        type: SearchType.LT,
      },
      false,
      searchDataString,
    );

    expect(result).toBe(false);
  });

  test('different alphabet case is ignored(string is bigger if caseSensitive) -> true', () => {
    const result = less(
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
    const result = less(
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
    const result = less(
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
    const result = less(
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
    const result = less(
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

  test('target value is number(equal) -> false', () => {
    const result = less(
      {
        name: 'fullName',
        value: 34123,
        type: SearchType.LT,
      },
      false,
      searchDataNumber,
    );

    expect(result).toBe(false);
  });
});
