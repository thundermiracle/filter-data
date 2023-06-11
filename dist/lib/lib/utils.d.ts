import { transduce, filter, curry, complement, allPass, anyPass, drop, take } from 'ramda';
import type { DataObjectValues, DataObjectWithNull } from './types';
type AnyFunction = (...args: any[]) => any;
declare function listCombiner(list: any[], val: any): any[];
declare function compose(...fns: AnyFunction[]): (...args: any[]) => any[];
declare function getObjValue(data: DataObjectWithNull, key: string | string[]): DataObjectValues | undefined;
export { listCombiner, compose, transduce, filter, curry, complement, allPass, anyPass, drop, take, getObjValue, };
