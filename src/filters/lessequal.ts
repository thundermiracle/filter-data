import greaterMaker from './greater';
import { SearchCondition, DataObject, DataPredicator } from '../constant/types';

/**
 * return function lessequal(data: object): boolean
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

  return function lessequal(data: DataObject): boolean {
    return !greater(data);
  };
};
