import equal from './equal';
import { complement } from '../lib/utils';
import { SearchCondition, DataObject } from '../lib/types';

/**
 * not equal check for data
 *
 * @param {*object} searchCondition: { name, value }
 * @param {*boolean} includeNull: false
 * @param {*boolean} caseSensitive: false
 * @param {*DataObject} data
 */
const notEqual = (
  searchCondition: SearchCondition,
  includeNull: boolean,
  caseSensitive: boolean,
  data: DataObject,
): boolean =>
  complement(equal)(searchCondition, includeNull, caseSensitive, data);

export default notEqual;
