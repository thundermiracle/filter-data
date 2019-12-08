import greaterMaker from './greater';
import equalMaker from './equal';
import { DataObject, SearchCondition, DataPredicator } from '../constant/types';

/**
 * return function less(data: object): boolean
 *
 * @param {*object} searchCondition: { name, value }
 * @param {*boolean} includeNull: false
 * @param {*boolean} caseSensitive: false
 */
export default (
  searchCondition: SearchCondition,
  includeNull = false,
  caseSensitive = false,
): DataPredicator => {
  const greater = greaterMaker(searchCondition, includeNull, caseSensitive);
  const equal = equalMaker(searchCondition, includeNull, caseSensitive);

  return function less(data: DataObject): boolean {
    return !greater(data) && !equal(data);
  };
};
