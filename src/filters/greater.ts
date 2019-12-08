import { SearchCondition, DataObject, DataPredicator } from '../constant/types';

/**
 * return function greater(data: object): boolean
 *
 * @param {*object} searchCondition: { name, value }
 * @param {*boolean} includeNull: false
 * @param {*boolean} caseSensitive: false
 */
export default (
  { name, value }: SearchCondition,
  includeNull = false,
  caseSensitive = false,
): DataPredicator => {
  return function greater(data: DataObject): boolean {
    const targetValue = data[name];

    if (targetValue == null) {
      return includeNull;
    }

    // disable like search if targetValue is array
    if (Array.isArray(targetValue)) {
      return false;
    }

    // 数字の場合
    if (!isNaN(+targetValue)) {
      return +targetValue > +value;
    }

    if (caseSensitive) {
      return targetValue > value;
    }

    return (
      targetValue.toString().toUpperCase() > value.toString().toUpperCase()
    );
  };
};
