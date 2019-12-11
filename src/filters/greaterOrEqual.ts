import less from './less';
import { complement } from '../lib/utils';

/**
 * greater or equal check for data
 *
 * @param {*object} searchCondition: { name, value }
 * @param {*boolean} caseSensitive: false
 * @param {*DataObject} data
 */
const greaterOrEqual = complement(less);

export default greaterOrEqual;
