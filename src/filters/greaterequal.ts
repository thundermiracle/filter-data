import lessMaker from './less';
import { SearchCondition, DataObject, DataPredicator } from '../constant/types';

/**
 * return function greaterequal(data: object): boolean
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
  const less = lessMaker(searchCondition, includeNull, caseSensitive);

  return function greaterequal(data: DataObject): boolean {
    return !less(data);
  };
};
