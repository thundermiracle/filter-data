import { SearchCondition, DataObject } from '../lib/types';

/**
 * equal check for data
 *
 * @param {*object} searchCondition: { name, value }
 * @param {*boolean} caseSensitive: false
 * @param {*DataObject} data
 */
const equal = (
  { key, value }: SearchCondition,
  caseSensitive: boolean,
  data: DataObject,
): boolean => {
  const targetValue = data[key];

  if (typeof targetValue === 'number') {
    return targetValue === Number(value);
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

export default equal;
