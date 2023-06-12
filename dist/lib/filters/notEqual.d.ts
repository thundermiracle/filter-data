/**
 * not equal check for data
 *
 * @param {*object} searchCondition: { name, value }
 * @param {*boolean} caseSensitive: false
 * @param {*DataObject} data
 */
declare const notEqual: (conditions: import("../lib/types").SearchCondition, caseSensitive: boolean, data: import("../lib/types").DataObject) => boolean;
export default notEqual;
