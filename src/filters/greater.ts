import { getObjValue } from '../lib/utils';

import type { FilterFunction } from '../lib/types';

/**
 * greater check for data
 *
 * @param {*object} searchCondition: { name, value }
 * @param {*boolean} caseSensitive: false
 * @param {*DataObject} data
 */
const greater: FilterFunction = ({ key, value }, caseSensitive, data) => {
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
