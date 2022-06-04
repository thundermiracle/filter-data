import { SearchCondition, DataObject } from '../lib/types';
import { getObjValue } from '../lib/utils';

/**
 * greater check for data
 *
 * @param {*object} searchCondition: { name, value }
 * @param {*boolean} caseSensitive: false
 * @param {*DataObject} data
 */
const greater = (
  { key, value }: SearchCondition,
  caseSensitive: boolean,
  data: DataObject,
): boolean => {
  const targetValue = getObjValue(data, key);
  if (targetValue == null) {
    return false;
  }

  // disable like search if targetValue is array
  if (Array.isArray(targetValue)) {
    return false;
  }

  // 数字の場合
  if (typeof targetValue === 'number') {
    return targetValue > Number(value);
  }

  if (caseSensitive) {
    return targetValue > value;
  }

  return targetValue.toUpperCase() > value.toString().toUpperCase();
};

export default greater;
