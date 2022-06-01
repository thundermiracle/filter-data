import { SearchCondition, DataObject, DataObjectValues } from '../lib/types';
import { path } from '../lib/utils';

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
  const targetValue =
    (typeof key === 'string' ? data[key] : path<DataObjectValues>(key, data)) ||
    '';

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
