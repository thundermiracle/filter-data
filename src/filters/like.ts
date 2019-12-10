import { SearchCondition, DataObject } from '../lib/types';

/**
 * like check for data
 *
 * @param {*object} searchCondition: { name, value }
 * @param {*boolean} includeNull: false
 * @param {*boolean} caseSensitive: false
 * @param {*DataObject} data
 */
const like = (
  searchCondition: SearchCondition,
  includeNull: boolean,
  caseSensitive: boolean,
  data: DataObject,
): boolean => {
  const { name, value } = searchCondition;
  const targetValue = data[name];

  if (targetValue == null) {
    return includeNull;
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
