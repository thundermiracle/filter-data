import targetValueArray from '../../src/prefilters/targetValueArray';
import SearchType from '../../src/lib/SearchType';

const predicatorTrue = jest.fn(() => true);
const predicatorFalse = jest.fn(() => false);

const data = {
  fullName: 'Ben Jackson',
  fullNameArray: ['Ben Jackson'],
};

describe('targetValue is array', () => {
  const searchCondition = {
    key: 'fullNameArray',
    value: 'dummy',
    type: SearchType.LT,
  };

  test('true, predicator not called', () => {
    const result = targetValueArray(
      predicatorTrue,
      searchCondition,
      false,
      data,
    );

    expect(result).toBe(false);
    expect(predicatorTrue.mock.calls.length).toBe(0);
  });
});

describe('targetValue is not array', () => {
  const searchCondition = {
    key: 'fullName',
    value: 'dummy',
    type: SearchType.LT,
  };

  test('predicator returns true -> true, predicator called', () => {
    const result = targetValueArray(
      predicatorTrue,
      searchCondition,
      true,
      data,
    );

    expect(result).toBe(true);
    expect(predicatorTrue.mock.calls[0]).toEqual([searchCondition, true, data]);
  });

  test('predicator returns false -> false, predicator called', () => {
    const result = targetValueArray(
      predicatorFalse,
      searchCondition,
      true,
      data,
    );

    expect(result).toBe(false);
    expect(predicatorTrue.mock.calls[0]).toEqual([searchCondition, true, data]);
  });
});
