import type { SearchCondition, DataObject } from '../lib/types';
/**
 * like check for data
 *
 * @param {*object} searchCondition: { name, value }
 * @param {*boolean} caseSensitive: false
 * @param {*DataObject} data
 */
declare const like: (searchCondition: SearchCondition, caseSensitive: boolean, data: DataObject) => boolean;
export default like;
