import { SearchCondition, DataObject } from '../lib/types';

/**
 * equal check for data
 *
 * @param {*object} searchCondition: { name, value }
 * @param {*boolean} includeNull: false
 * @param {*boolean} caseSensitive: false
 * @param {*DataObject} data
 */
const like = (
  { name, value }: SearchCondition,
  includeNull: boolean,
  caseSensitive: boolean,
  data: DataObject,
): boolean => {
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

export default like;
