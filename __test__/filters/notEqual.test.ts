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

const searchDataBoolean = {
  married: true,
};

const searchDataArrayBoolean = {
  married: [true, true],
};

const searchDataDate = {
  registered: '2023-08-14T10:00:00.000Z',
};

const searchDataArrayDate = {
  registered: ['2023-08-14T10:00:00.000Z', '2023-08-15T21:00:00.000Z'],
};

describe('test caseSensitive flag', () => {
  test('caseSensitive=true(same string, different alphabet case) -> true', () => {
    const result = notEqual(
      {
        key: 'fullName',
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
        key: 'fullName',
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
        key: 'fullName',
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
        key: 'fullName',
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
        key: 'fullName',
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
        key: 'fullName',
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
        key: 'fullName',
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
        key: 'fullName',
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
        key: 'fullName',
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
        key: 'fullName',
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
        key: 'fullName',
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
        key: 'fullName',
        value: '123',
        type: SearchType.NE,
      },
      false,
      searchDataArrayNumber,
    );

    expect(result).toBe(false);
  });

  test('target value is boolean string and search value is boolean -> true', () => {
    const result = notEqual(
      {
        key: 'married',
        value: true,
        type: SearchType.NE,
      },
      false,
      searchDataBoolean,
    );

    expect(result).toBe(false);
  });

  test('target value is array of boolean string and search value is boolean -> true', () => {
    const result = notEqual(
      {
        key: 'married',
        value: true,
        type: SearchType.NE,
      },
      false,
      searchDataArrayBoolean,
    );

    expect(result).toBe(false);
  });

  test('target value is boolean string and search value is boolean -> false', () => {
    const result = notEqual(
      {
        key: 'married',
        value: false,
        type: SearchType.NE,
      },
      false,
      searchDataBoolean,
    );

    expect(result).toBe(true);
  });

  test('target value is array of boolean string and search value is boolean -> false', () => {
    const result = notEqual(
      {
        key: 'married',
        value: false,
        type: SearchType.NE,
      },
      false,
      searchDataArrayBoolean,
    );

    expect(result).toBe(true);
  });

  test('target value is date string and search value is Date(same)', () => {
    const result = notEqual(
      {
        key: 'registered',
        value: new Date('2023-08-14T10:00:00.000Z'),
        type: SearchType.NE,
      },
      false,
      searchDataDate,
    );

    expect(result).toBe(false);
  });

  test('target value is date string and search value is Date array(same)', () => {
    const result = notEqual(
      {
        key: 'registered',
        value: new Date('2023-08-15T21:00:00.000Z'),
        type: SearchType.NE,
      },
      false,
      searchDataArrayDate,
    );

    expect(result).toBe(false);
  });

  test('target value is date string and search value is Date(different)', () => {
    const result = notEqual(
      {
        key: 'registered',
        value: new Date('2023-08-14T09:00:00.000Z'),
        type: SearchType.NE,
      },
      false,
      searchDataDate,
    );

    expect(result).toBe(true);
  });

  test('target value is date string and search value is Date array(different)', () => {
    const result = notEqual(
      {
        key: 'registered',
        value: new Date('2023-08-15T10:00:00.000Z'),
        type: SearchType.NE,
      },
      false,
      searchDataArrayDate,
    );

    expect(result).toBe(true);
  });
});
