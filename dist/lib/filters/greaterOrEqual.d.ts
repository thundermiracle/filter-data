/**
 * greater or equal check for data
 *
 * @param {*object} searchCondition: { name, value }
 * @param {*boolean} caseSensitive: false
 * @param {*DataObject} data
 */
declare const greaterOrEqual: import("ts-toolbelt/out/Function/Curry").Curry<(searchCondition: import("../lib/types").SearchCondition, caseSensitive: boolean, data: import("../lib/types").DataObject) => boolean>;
export default greaterOrEqual;
