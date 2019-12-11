import notEqual from '../../src/filters/notEqual';
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
  test('caseSensitive=true(same string, different alphabet case) -> true', () => {
    const result = notEqual(
      {
        name: 'fullName',
        value: 'ben jackson',
        type: SearchType.NE,
      },
      true,
      searchDataString,
    );

    expect(result).toBe(true);
  });

  test('caseSensitive=true(same string, same alphabet case) -> false', () => {
    const result = notEqual(
      {
        name: 'fullName',
        value: 'Ben Jackson',
        type: SearchType.NE,
      },
      true,
      searchDataString,
    );

    expect(result).toBe(false);
  });

  test('caseSensitive=true(exist in array, different alphabet case) -> true', () => {
    const result = notEqual(
      {
        name: 'fullName',
        value: 'jackson',
        type: SearchType.NE,
      },
      true,
      searchDataArray,
    );

    expect(result).toBe(true);
  });

  test('caseSensitive=true(target value is array of number(value is string number, same)) -> true', () => {
    const result = notEqual(
      {
        name: 'fullName',
        value: '123',
        type: SearchType.NE,
      },
      true,
      searchDataArrayNumber,
    );

    expect(result).toBe(true);
  });
});

describe('test searchCondition', () => {
  test('same string, different alphabet case -> false', () => {
    const result = notEqual(
      {
        name: 'fullName',
        value: 'ben jackson',
        type: SearchType.NE,
      },
      false,
      searchDataString,
    );

    expect(result).toBe(false);
  });

  test('exist in array, different alphabet case -> false', () => {
    const result = notEqual(
      {
        name: 'fullName',
        value: 'jackson',
        type: SearchType.NE,
      },
      false,
      searchDataArray,
    );

    expect(result).toBe(false);
  });

  test('target value is number(value is number, same) -> false', () => {
    const result = notEqual(
      {
        name: 'fullName',
        value: 123.456,
        type: SearchType.NE,
      },
      false,
      searchDataNumber,
    );

    expect(result).toBe(false);
  });

  test('target value is number(value is number, not same) -> true', () => {
    const result = notEqual(
      {
        name: 'fullName',
        value: 123.356,
        type: SearchType.NE,
      },
      false,
      searchDataNumber,
    );

    expect(result).toBe(true);
  });

  test('target value is number(value is string number, same) -> false', () => {
    const result = notEqual(
      {
        name: 'fullName',
        value: '123.456',
        type: SearchType.NE,
      },
      false,
      searchDataNumber,
    );

    expect(result).toBe(false);
  });

  test('target value is number(value is string number, not same) -> true', () => {
    const result = notEqual(
      {
        name: 'fullName',
        value: '123.356',
        type: SearchType.NE,
      },
      false,
      searchDataNumber,
    );

    expect(result).toBe(true);
  });

  test('target value is array of number(value is number, same) -> false', () => {
    const result = notEqual(
      {
        name: 'fullName',
        value: 123,
        type: SearchType.NE,
      },
      false,
      searchDataArrayNumber,
    );

    expect(result).toBe(false);
  });

  test('target value is array of number(value is string number, same) -> false', () => {
    const result = notEqual(
      {
        name: 'fullName',
        value: '123',
        type: SearchType.NE,
      },
      false,
      searchDataArrayNumber,
    );

    expect(result).toBe(false);
  });
});
