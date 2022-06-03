import transduce from 'ramda/src/transduce';
import filter from 'ramda/src/filter';
import curry from 'ramda/src/curry';
import complement from 'ramda/src/complement';
import allPass from 'ramda/src/allPass';
import anyPass from 'ramda/src/anyPass';
import drop from 'ramda/src/drop';
import take from 'ramda/src/take';

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
