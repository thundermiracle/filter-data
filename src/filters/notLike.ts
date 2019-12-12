import like from './like';
import { complement } from '../lib/utils';
import targetValueArray from '../prefilters/targetValueArray';

/**
 * not like check for data
 *
 * @param {*object} searchCondition: { name, value }
 * @param {*boolean} caseSensitive: false
 * @param {*DataObject} data
 */
const notLike = targetValueArray(complement(like));

export default notLike;
