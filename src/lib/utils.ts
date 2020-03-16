import transduce from 'ramda/src/transduce';
import filter from 'ramda/src/filter';
import curry from 'ramda/src/curry';
import complement from 'ramda/src/complement';
import allPass from 'ramda/src/allPass';
import anyPass from 'ramda/src/anyPass';
import drop from 'ramda/src/drop';
import take from 'ramda/src/take';

// use impure combiner to speed up
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function listCombiner(list: any[], val: any): any[] {
  list.push(val);
  return list;
}

// use self-made compose to avoid typescript error
function compose(...fns: Function[]) {
  return (...args: any[]) =>
    fns.reduceRight((prevBC, fn) => {
      if (!Array.isArray(prevBC)) prevBC = [prevBC];

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
