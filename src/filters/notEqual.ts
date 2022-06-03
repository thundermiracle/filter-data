import { complement } from '../lib/utils';

import equal from './equal';

/**
 * not equal check for data
 *
 * @param {*object} searchCondition: { name, value }
 * @param {*boolean} caseSensitive: false
 * @param {*DataObject} data
 */
const notEqual = complement(equal);

export default notEqual;
