import equal from './equal';
import { complement } from '../lib/utils';

/**
 * not equal check for data
 *
 * @param {*object} searchCondition: { name, value }
 * @param {*boolean} caseSensitive: false
 * @param {*DataObject} data
 */
const notEqual = complement(equal);

export default notEqual;
