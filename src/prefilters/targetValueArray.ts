import { curry, getObjValue } from '../lib/utils';

import type { F } from 'ts-toolbelt';
import type { SearchCondition, DataObject } from '../lib/types';

type PredicatorWithOptions = (
  searchCondition: SearchCondition,
  caseSensitive: boolean,
  data: DataObject,
) => boolean;

/**
 * exclude data if targetValue is an array
 *
 * @param {*function} filterCallback
 * @param {*object} searchCondition: { name, value }
 * @param {*boolean} caseSensitive: false
 * @param {*DataObject} data
 */
const excludeIfTargetValueIsArray = (
  predicator: PredicatorWithOptions,
  searchCondition: SearchCondition,
  caseSensitive: boolean,
  data: DataObject,
): boolean => {
  const { key } = searchCondition;
  const targetValue = getObjValue(data, key);

  if (Array.isArray(targetValue)) {
    return false;
  }

  return predicator(searchCondition, caseSensitive, data);
};

const targetValueArray: F.Curry<typeof excludeIfTargetValueIsArray> = curry(
  excludeIfTargetValueIsArray,
);

export default targetValueArray;
