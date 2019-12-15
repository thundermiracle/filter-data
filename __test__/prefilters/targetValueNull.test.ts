import targetValueNull from '../../src/prefilters/targetValueNull';
import SearchType from '../../src/lib/SearchType';

const predicatorTrue = jest.fn(() => true);
const predicatorFalse = jest.fn(() => false);

const data = {
  fullName: 'Ben Jackson',
};

describe('targetValue is null', () => {
  const searchCondition = {
    key: 'NotExist',
    value: 'dummy',
    type: SearchType.EQ,
  };

  test('includeNull=true -> true, predicator not called', () => {
    const result = targetValueNull(true, searchCondition, predicatorTrue, data);

    expect(result).toBe(true);
    expect(predicatorTrue.mock.calls.length).toBe(0);
  });

  test('includeNull=false -> false, predicator not called', () => {
    const result = targetValueNull(
      false,
      searchCondition,
      predicatorTrue,
      data,
    );

    expect(result).toBe(false);
    expect(predicatorTrue.mock.calls.length).toBe(0);
  });
});

describe('targetValue is exist', () => {
  const searchCondition = {
    key: 'fullName',
    value: 'dummy',
    type: SearchType.EQ,
  };

  test('includeNull=true, predicator returns true -> true, predicator called', () => {
    const result = targetValueNull(true, searchCondition, predicatorTrue, data);

    expect(result).toBe(true);
    expect(predicatorTrue.mock.calls[0]).toEqual([data]);
  });

  test('includeNull=false, predicator returns true -> true, predicator called', () => {
    const result = targetValueNull(
      false,
      searchCondition,
      predicatorTrue,
      data,
    );

    expect(result).toBe(true);
    expect(predicatorTrue.mock.calls[0]).toEqual([data]);
  });

  test('predicator returns false -> false, predicator called', () => {
    const result = targetValueNull(
      false,
      searchCondition,
      predicatorFalse,
      data,
    );

    expect(result).toBe(false);
    expect(predicatorFalse.mock.calls[0]).toEqual([data]);
  });
});
