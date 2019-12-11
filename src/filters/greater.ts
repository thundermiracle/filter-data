import { SearchCondition, DataObject } from '../lib/types';

/**
 * greater check for data
 *
 * @param {*object} searchCondition: { name, value }
 * @param {*boolean} caseSensitive: false
 * @param {*DataObject} data
 */
const greater = (
  { name, value }: SearchCondition,
  caseSensitive: boolean,
  data: DataObject,
): boolean => {
  const targetValue = data[name];

  // disable like search if targetValue is array
  if (Array.isArray(targetValue)) {
    return false;
  }

  // 数字の場合
  if (typeof targetValue === 'number') {
    return targetValue > +value;
  }

  if (caseSensitive) {
    return targetValue > value;
  }

  return targetValue.toUpperCase() > value.toString().toUpperCase();
};

export default greater;
