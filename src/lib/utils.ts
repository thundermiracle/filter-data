import {
  transduce,
  filter,
  curry,
  complement,
  allPass,
  anyPass,
  drop,
  take,
  path,
} from 'ramda';

import type { DataObjectValues, DataObjectWithNull } from './types';

type AnyFunction = (...args: any[]) => any;

// use impure combiner to speed up

function listCombiner(list: any[], val: any): any[] {
  list.push(val);
  return list;
}

// use self-made compose to avoid typescript error
function compose(...fns: AnyFunction[]) {
  return (...args: any[]) =>
    fns.reduceRight((prevBC, fn) => {
      if (!Array.isArray(prevBC)) {
        // eslint-disable-next-line no-param-reassign
        prevBC = [prevBC];
      }

      return fn(...prevBC);
    }, args);
}

function getObjValue(
  data: DataObjectWithNull,
  key: string | string[],
): DataObjectValues | undefined {
  return path<DataObjectValues>(
    typeof key === 'string' ? key.split('.') : key,
    data,
  );
}

function timeDiff(value: Date, targetValue: string | number | boolean) {
  return value.getTime() - new Date(targetValue.toString()).getTime();
}

export {
  listCombiner,
  compose,
  transduce,
  filter,
  curry,
  complement,
  allPass,
  anyPass,
  drop,
  take,
  getObjValue,
  timeDiff,
};
