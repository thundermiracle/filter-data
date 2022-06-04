import { curry, getObjValue } from '../lib/utils';
import {
  DataObjectWithNull,
  Predicator,
  SearchCondition,
  DataObject,
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
  { key }: SearchCondition,
  predicator: Predicator,
  data: DataObjectWithNull,
): boolean => {
  const targetValue = getObjValue(data, key);

  // value is null or undefined
  if (targetValue == null) {
    return includeNull;
  }

  return predicator(data as DataObject);
};

export default curry(targetValueIsNull);
