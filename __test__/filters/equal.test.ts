import equal from '../../src/filters/equal';
import SearchType from '../../src/lib/SearchType';

const searchDataNumber = {
  fullName: 123.456,
};

const searchDataArrayNumber = {
  fullName: [123, 234],
};

const searchDataString = {
  fullName: 'Ben Jackson',
};

const searchDataArray = {
  fullName: ['Ben', 'Jackson'],
};

describe('test caseSensitive flag', () => {
  test('caseSensitive=true(same string, different alphabet case) -> false', () => {
    const result = equal(
      {
        key: 'fullName',
        value: 'ben jackson',
        type: SearchType.EQ,
      },
      true,
      searchDataString,
    );

    expect(result).toBe(false);
  });

  test('caseSensitive=true(same string, same alphabet case) -> true', () => {
    const result = equal(
      {
        key: 'fullName',
        value: 'Ben Jackson',
        type: SearchType.EQ,
      },
      true,
      searchDataString,
    );

    expect(result).toBe(true);
  });

  test('caseSensitive=true(targetvalue is array, different alphabet case) -> false', () => {
    const result = equal(
      {
        key: 'fullName',
        value: 'jackson',
        type: SearchType.EQ,
      },
      true,
      searchDataArray,
    );

    expect(result).toBe(false);
  });

  test('caseSensitive=true(targetvalue is array, same alphabet case) -> true', () => {
    const result = equal(
      {
        key: 'fullName',
        value: 'Jackson',
        type: SearchType.EQ,
      },
      true,
      searchDataArray,
    );

    expect(result).toBe(true);
  });

  test('caseSensitive=true(not exist in array) -> false', () => {
    const result = equal(
      {
        key: 'fullName',
        value: 'ben jackson',
        type: SearchType.EQ,
      },
      true,
      searchDataString,
    );

    expect(result).toBe(false);
  });

  test('caseSensitive=true(target value is array of number(value is string number, same)) -> false', () => {
    const result = equal(
      {
        key: 'fullName',
        value: '123',
        type: SearchType.EQ,
      },
      true,
      searchDataArrayNumber,
    );

    expect(result).toBe(false);
  });
});

describe('test searchCondition', () => {
  test('value not same -> false', () => {
    const result = equal(
      {
        key: 'fullName',
        value: 'ben jack',
        type: SearchType.EQ,
      },
      false,
      searchDataString,
    );

    expect(result).toBe(false);
  });

  test('same string, different alphabet case -> true', () => {
    const result = equal(
      {
        key: 'fullName',
        value: 'ben jackson',
        type: SearchType.EQ,
      },
      false,
      searchDataString,
    );

    expect(result).toBe(true);
  });

  test('targetvalue is array, different alphabet case -> true', () => {
    const result = equal(
      {
        key: 'fullName',
        value: 'jackson',
        type: SearchType.EQ,
      },
      false,
      searchDataArray,
    );

    expect(result).toBe(true);
  });

  test('target value is number(value is number, same) -> true', () => {
    const result = equal(
      {
        key: 'fullName',
        value: 123.456,
        type: SearchType.EQ,
      },
      false,
      searchDataNumber,
    );

    expect(result).toBe(true);
  });

  test('target value is number(value is number, not same) -> false', () => {
    const result = equal(
      {
        key: 'fullName',
        value: 123.356,
        type: SearchType.EQ,
      },
      false,
      searchDataNumber,
    );

    expect(result).toBe(false);
  });

  test('target value is number(value is string number, same) -> true', () => {
    const result = equal(
      {
        key: 'fullName',
        value: '123.456',
        type: SearchType.EQ,
      },
      false,
      searchDataNumber,
    );

    expect(result).toBe(true);
  });

  test('target value is array of number(value is number, same) -> true', () => {
    const result = equal(
      {
        key: 'fullName',
        value: 123,
        type: SearchType.EQ,
      },
      false,
      searchDataArrayNumber,
    );

    expect(result).toBe(true);
  });

  test('target value is array of number(value is string number, same) -> true', () => {
    const result = equal(
      {
        key: 'fullName',
        value: '123',
        type: SearchType.EQ,
      },
      false,
      searchDataArrayNumber,
    );

    expect(result).toBe(true);
  });
});
