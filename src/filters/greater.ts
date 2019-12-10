import { SearchCondition, DataObject } from '../lib/types';

/**
 * greater check for data
 *
 * @param {*object} searchCondition: { name, value }
 * @param {*boolean} includeNull: false
 * @param {*boolean} caseSensitive: false
 * @param {*DataObject} data
 */
const greater = (
  { name, value }: SearchCondition,
  includeNull: boolean,
  caseSensitive: boolean,
  data: DataObject,
): boolean => {
  const targetValue = data[name];

  if (targetValue == null) {
    return includeNull;
  }

  // disable like search if targetValue is array
  if (Array.isArray(targetValue)) {
    return false;
  }

  // 数字の場合
  if (!isNaN(+targetValue)) {
    return +targetValue > +value;
  }

  if (caseSensitive) {
    return targetValue > value;
  }

  return targetValue.toString().toUpperCase() > value.toString().toUpperCase();
};

export default greater;
