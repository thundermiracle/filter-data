import likeMaker from './like';
import { SearchCondition, DataObject, DataPredicator } from '../constant/types';

/**
 * return function notlike(data: object): boolean
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
  const like = likeMaker(searchCondition, includeNull, caseSensitive);

  return function notlike(data: DataObject): boolean {
    const likeResult = like(data);

    return !likeResult;
  };
};
