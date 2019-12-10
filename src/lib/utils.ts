import { transduce, filter, curry, complement, allPass } from 'ramda';

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
      if (fn == null) return prevBC;

      if (!Array.isArray(prevBC)) prevBC = [prevBC];

      return fn(...prevBC);
    }, args);
}

export { listCombiner, compose, transduce, filter, curry, complement, allPass };
