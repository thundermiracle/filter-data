import { curry, path } from '../lib/utils';
import { SearchCondition, DataObject, DataObjectValues } from '../lib/types';

/**
 * exclude data if targetValue is an array
 *
 * @param {*function} filterCallback
 * @param {*object} searchCondition: { name, value }
 * @param {*boolean} caseSensitive: false
 * @param {*DataObject} data
 */
const excludeIfTargetValueIsArray = (
  predicator: Function,
  searchCondition: SearchCondition,
  caseSensitive: boolean,
  data: DataObject,
): boolean => {
  const { key } = searchCondition;
  const targetValue =
    (typeof key === 'string' ? data[key] : path<DataObjectValues>(key, data)) ||
    '';

  if (Array.isArray(targetValue)) {
    return false;
  }

  return predicator(searchCondition, caseSensitive, data);
};

export default curry(excludeIfTargetValueIsArray);
