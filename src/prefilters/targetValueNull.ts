import { curry } from '../lib/utils';
import {
  SearchCondition,
  DataObject,
  DataObjectWithNull,
  Predicator,
} from '../lib/types';

/**
 * is null check
 *
 * @param {*boolean} includeNull: false
 * @param {*Predicator} predicator: normal predicator
 * @param {*object} searchCondition: { name, value }
 * @param {*boolean} caseSensitive: false
 * @param {*DataObject} data
 */
const targetValueIsNull = (
  includeNull: boolean,
  predicator: Predicator,
  searchCondition: SearchCondition,
  caseSensitive: boolean,
  data: DataObjectWithNull,
): boolean => {
  const { name } = searchCondition;
  const targetValue = data[name];

  // value is null or undefined
  if (targetValue == null) {
    return includeNull;
  }

  return predicator(searchCondition, caseSensitive, data as DataObject);
};

export default curry(targetValueIsNull);
