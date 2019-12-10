import greater from './greater';
import { complement } from '../lib/utils';

/**
 * less or equal check for data
 *
 * @param {*object} searchCondition: { name, value }
 * @param {*boolean} includeNull: false
 * @param {*boolean} caseSensitive: false
 * @param {*DataObject} data
 */
const lessOrEqual = complement(greater);

export default lessOrEqual;
