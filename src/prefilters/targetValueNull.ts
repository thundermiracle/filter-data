import { curry, path } from '../lib/utils';
import {
  DataObjectWithNull,
  Predicator,
  SearchCondition,
  DataObject,
  DataObjectWithNullValues,
} from '../lib/types';

/**
 * is null check
 *
 * @param {*boolean} includeNull: false
 * @param {*object} searchCondition: { name, value }
 * @param {*Predicator} predicator: normal predicator
 * @param {*DataObject} data
 */
const targetValueIsNull = (
  includeNull: boolean,
  searchCondition: SearchCondition,
  predicator: Predicator,
  data: DataObjectWithNull,
): boolean => {
  const { key } = searchCondition;
  const targetValue =
    typeof key === 'string'
      ? data[key]
      : path<DataObjectWithNullValues>(key, data);

  // value is null or undefined
  if (targetValue == null) {
    return includeNull;
  }

  return predicator(data as DataObject);
};

export default curry(targetValueIsNull);
