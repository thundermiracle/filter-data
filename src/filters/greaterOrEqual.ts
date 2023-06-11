import { complement } from '../lib/utils';
import targetValueArray from '../prefilters/targetValueArray';

import less from './less';

/**
 * greater or equal check for data
 *
 * @param {*object} searchCondition: { name, value }
 * @param {*boolean} caseSensitive: false
 * @param {*DataObject} data
 */
const greaterOrEqual = targetValueArray(complement(less));

export default greaterOrEqual;
