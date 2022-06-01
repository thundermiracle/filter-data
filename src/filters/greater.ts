import { SearchCondition, DataObject, DataObjectValues } from '../lib/types';
import { path } from '../lib/utils';

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
  const targetValue =
    (typeof key === 'string' ? data[key] : path<DataObjectValues>(key, data)) ||
    '';

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
