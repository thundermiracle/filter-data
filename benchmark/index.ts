import matchSorter from 'match-sorter';
import Fuse from 'fuse.js';
import { filterData, SearchType } from '../src';

interface Dummy {
  value: string;
  label: string;
  group: string;
}

function makeDummy(count: number): Dummy[] {
  return Array.from({ length: count }).map((_, ind) => ({
    value: `value_${ind}`,
    label: `label_${ind}`,
    group: ind % 2 === 0 ? 'group1' : 'group2',
  }));
}

function bench(
  count: number,
  inputValue: string,
  keys: string[],
  prefixStr = '',
  sliceCount?: number,
): void {
  const data = makeDummy(count);

  console.time(`[${prefixStr}]matchSorter`);
  let msResult = matchSorter(data, inputValue, { keys });
  if (sliceCount) msResult = msResult.slice(0, sliceCount);
  console.timeEnd(`[${prefixStr}]matchSorter`);

  console.time(`[${prefixStr}]fuse.js`);
  const fuse = new Fuse(data, { keys });
  let fuseResult = fuse.search(inputValue);
  if (sliceCount) fuseResult = fuseResult.slice(0, sliceCount);
  console.timeEnd(`[${prefixStr}]fuse.js`);

  console.time(`[${prefixStr}]filter-data`);
  const searchConditions = keys.map(key => ({
    key,
    value: inputValue,
    type: SearchType.LK,
  }));
  const fdResult = filterData(data, searchConditions, {
    includeNull: true,
    offset: 0,
    limit: sliceCount,
  });
  console.timeEnd(`[${prefixStr}]filter-data`);

  console.log(msResult.length, fuseResult.length, fdResult.length);
}

function benchArr(
  counts: number[],
  inputValue: string,
  keys: string[],
  prefixStr: string,
  sliceCount?: number,
): void {
  counts.forEach(count => {
    bench(count, inputValue, keys, `${prefixStr}--${count}`, sliceCount);
  });
  console.log('');
}

benchArr([100, 10000], 'lue', ['value'], 'AllMatch--Key:value');

benchArr([100, 10000], 'nono', ['value'], 'NoMatch--Key:value');

benchArr([100, 10000], '10', ['value'], 'PartialMatch--Key:value');

benchArr([100, 10000], 'l', ['value', 'label'], 'AllMatch--Key:value,label');

benchArr([100, 10000], 'nono', ['value', 'label'], 'NoMatch--Key:value,label');

benchArr(
  [100, 10000],
  '10',
  ['value', 'label'],
  'PartialMatch--Key:value,label',
);

benchArr([100, 10000], 'lue', ['value'], 'Slice10-AllMatch--Key:value', 10);

benchArr([100, 10000], 'nono', ['value'], 'Slice10-NoMatch--Key:value', 10);

benchArr([100, 10000], '10', ['value'], 'Slice10-PartialMatch--Key:value', 10);

benchArr([100, 10000], '', ['value'], 'InputEmpty-NoMatch--Key:value');
