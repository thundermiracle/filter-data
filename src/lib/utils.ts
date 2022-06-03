import {
  transduce,
  filter,
  curry,
  complement,
  allPass,
  anyPass,
  drop,
  take,
} from 'ramda';

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
};
