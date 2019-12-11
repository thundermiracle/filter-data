import {
  SearchCondition,
  DataObject,
  DataObjectWithNull,
  Predicator,
} from '../lib/types';

/**
 * is null check
 *
 * @param {*object} searchCondition: { name, value }
 * @param {*boolean} includeNull: false
 * @param {*Predicator} predicator: normal predicator
 * @param {*DataObject} data
 */
const nullable = (
  { name }: SearchCondition,
  includeNull: boolean,
  predicator: Predicator,
  data: DataObjectWithNull,
): boolean => {
  const targetValue = data[name];

  // value is null or undefined
  if (targetValue == null) {
    return includeNull;
  }

  return predicator(data as DataObject);
};

export default nullable;
