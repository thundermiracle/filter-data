import { getObjValue } from '../lib/utils';

import type { FilterFunction } from '../lib/types';

/**
 * equal check for data
 *
 * @param {*object} searchCondition: { name, value }
 * @param {*boolean} caseSensitive: false
 * @param {*DataObject} data
 */
const equal: FilterFunction = ({ key, value }, caseSensitive, data) => {
  const targetValue = getObjValue(data, key);
  if (targetValue == null) {
    return false;
  }

  if (typeof targetValue === 'number') {
    return targetValue === Number(value);
  }

  if (Array.isArray(targetValue)) {
    if (caseSensitive) {
      return targetValue.map((x) => x.toString()).includes(value.toString());
    }

    return targetValue
      .map((x) => x.toString().toUpperCase())
      .includes(value.toString().toUpperCase());
  }

  if (caseSensitive) {
    return targetValue === value.toString();
  }

  return targetValue.toString().toUpperCase() === value.toString().toUpperCase();
};

export default equal;
