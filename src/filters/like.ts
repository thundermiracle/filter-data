import { SearchCondition, DataObject, DataPredicator } from '../constant/types';

/**
 * return function like(data: object): boolean
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
  return function like(data: DataObject): boolean {
    const { name, value } = searchCondition;
    const targetValue = data[name];

    if (targetValue == null) {
      return includeNull;
    }

    // disable like search if targetValue is array
    if (Array.isArray(targetValue)) {
      return false;
    }

    if (caseSensitive) {
      return targetValue.toString().includes(value.toString());
    }

    return targetValue
      .toString()
      .toUpperCase()
      .includes(value.toString().toUpperCase());
  };
};
