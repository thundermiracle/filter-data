import equalMaker from './equal';
import { SearchCondition, DataObject, DataPredicator } from '../constant/types';

/**
 * return function notequal(data: object): boolean
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
  const euqal = equalMaker(searchCondition, includeNull, caseSensitive);

  return function notequal(data: DataObject): boolean {
    const euqalResult = euqal(data);

    return !euqalResult;
  };
};
