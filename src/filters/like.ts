import { SearchCondition, DataObject } from '../lib/types';
import { getObjValue } from '../lib/utils';

/**
 * like check for data
 *
 * @param {*object} searchCondition: { name, value }
 * @param {*boolean} caseSensitive: false
 * @param {*DataObject} data
 */
const like = (
  searchCondition: SearchCondition,
  caseSensitive: boolean,
  data: DataObject,
): boolean => {
  const { key, value } = searchCondition;
  const targetValue = getObjValue(data, key);
  if (targetValue == null) {
    return false;
  }

  // disable like search if targetValue is array
  if (Array.isArray(targetValue)) {
    return false;
  }

  if (caseSensitive) {
    return targetValue.toString().includes(value.toString());
  }

  return targetValue
    .toString()
    .toUpperCase()
    .includes(value.toString().toUpperCase());
};

export default like;
