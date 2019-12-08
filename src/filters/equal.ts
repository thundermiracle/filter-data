import { SearchCondition, DataObject, DataPredicator } from '../constant/types';

/**
 * return function equal(data: object): boolean
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
  return function equal(data: DataObject): boolean {
    const targetValue = data[name];

    // value is null
    if (targetValue == null) {
      return includeNull;
    }

    if (typeof targetValue === 'number') {
      return targetValue === +value;
    }

    if (Array.isArray(targetValue)) {
      if (caseSensitive) {
        return targetValue.includes(value);
      }

      return targetValue
        .map((x: string | number) => x.toString().toUpperCase())
        .includes(value.toString().toUpperCase());
    }

    if (caseSensitive) {
      return targetValue === value.toString();
    }

    return targetValue.toUpperCase() === value.toString().toUpperCase();
  };
};
