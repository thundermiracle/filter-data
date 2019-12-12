import greater from './greater';
import { complement } from '../lib/utils';
import targetValueArray from '../prefilters/targetValueArray';

/**
 * less or equal check for data
 *
 * @param {*object} searchCondition: { name, value }
 * @param {*boolean} caseSensitive: false
 * @param {*DataObject} data
 */
const lessOrEqual = targetValueArray(complement(greater));

export default lessOrEqual;
