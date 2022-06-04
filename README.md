# filter-data

[![npm version](https://badge.fury.io/js/filter-data.svg)](https://badge.fury.io/js/filter-data)
[![dependencies Status](https://david-dm.org/thundermiracle/filter-data/status.svg)](https://david-dm.org/thundermiracle/filter-data)
[![CircleCI](https://img.shields.io/circleci/build/github/thundermiracle/filter-data/master)](https://circleci.com/gh/thundermiracle/filter-data)
[![codecov](https://img.shields.io/codecov/c/github/thundermiracle/filter-data)](https://codecov.io/gh/thundermiracle/filter-data)

## Description

Simple but fast data filter.

## Examples

1. [Example In Browser](https://codesandbox.io/s/filter-data-browser-stxj8?file=/index.html)
1. [Example In React](https://codesandbox.io/s/filter-data-react-iw534?file=/src/getData.js)

## Benchmark

### _100 Records_(ms)

  _*The results are little different in partial search._

|  | match-sorter (6.3.1) | fuse.js (6.6.2) | filter-data (0.2.0) |
| :--- | :--: | :-: | :--: |
| match all, 1 key | 10.947ms | 4.244ms | <span style="color: green">1.827ms</span> |
| no match, 1 key | <span style="color: green">0.523ms</span> | 2.385ms | 2.958ms |
| match partial, 1 key | <span style="color: green">0.232ms</span> | 0.318ms | 2.475ms |
| match all, 2 keys | 1.472ms | <span style="color: green">0.465ms</span> | 2.209ms |
| no match, 2 keys | <span style="color: green">0.188ms</span> | 0.513ms | 2.522ms |
| match partial, 2 keys | <span style="color: green">0.191ms</span> | 0.318ms | 2.475ms |
| match all, 1 key, slice(0,10) | <span style="color: green">0.192ms</span> | 0.206ms | 0.388ms |
| no match, 1 key, slice(0,10) | 0.101ms | 0.317ms | <span style="color: green">0.079ms</span> |
| match partial, 1 key, slice(0,10) | <span style="color: green">0.107ms</span> | 0.188ms | 2.807ms |
| input empty | 0.114ms | 0.095ms | <span style="color: green">0.033ms</span> |

### _10000 Records_(ms)

  _*The results are little different in partial search._

|  | match-sorter (4.0.2) | fuse.js (3.4.6) | filter-data (0.2.0) |
| :--- | :--: | :-: | :--: |
| match all, 1 key | 21.439ms | 49.336ms | <span style="color: green">16.884ms</span> |
| no match, 1 key | 18.239ms | 33.312ms | <span style="color: green">6.382ms</span> |
| match partial, 1 key | 18.754ms | 22.56ms | <span style="color: green">3.805ms</span> |
| match all, 2 keys | 22.815ms | 22.524ms | <span style="color: green">10.416ms</span> |
| no match, 2 keys | 18.096ms | 33.232ms | <span style="color: green">3.744ms</span> |
| match partial, 2 keys | 16.821ms | 27.052ms | <span style="color: green">3.094ms</span> |
| match all, 1 key, slice(0,10) | 10.614ms | 12.692ms | <span style="color: green">0.106ms</span> |
| no match, 1 key, slice(0,10) | 9.808ms | 19.709ms | <span style="color: green">0.111ms</span> |
| match partial, 1 key, slice(0,10) | 9.593ms | 16.094ms | <span style="color: green">0.393ms</span> |
| input empty | 10.571ms | 6.985ms | <span style="color: green">0.03ms</span> |

## Install From Browser

```html
<script src="https://cdn.jsdelivr.net/npm/filter-data@0.2.0/dist/filterdata.min.js"></script>
```

## Installation

filter-data is available as an [npm package](https://www.npmjs.org/package/filter-data).

```sh
npm install --save filter-data
```

## Usage

### From Browser

import from FilterData object. And others are the same with [From npm](#from-npm)

```js
const { filterData, SearchType } = FilterData;
.
.
.
```

### From npm

1. search single key only.

    ```js
    import { filterData, SearchType } from 'filter-data';

    // search firstName contains 'dan' and age < 20
    const searchConditions = [
      {
        key: 'firstName',
        value: 'dan',
        type: SearchType.LK,
      },
      {
        key: 'age',
        value: 20,
        type: SearchType.LT,
      },
    ];

    const result = filterData(data, searchConditions);
    // output:
    <!-- [
      { firstName: 'Daniel', age: 14 },
      { firstName: 'Dan', age: 18 },
    ] -->
    ```

1. search multiple keys.

    ```js
    import { filterData, SearchType } from 'filter-data';

    // search firstName&lastName contains 'dan' and age < 20
    const searchConditions = [
      {
        key: ['firstName', 'lastName'],
        value: 'dan',
        type: SearchType.LK,
      },
      {
        key: 'age',
        value: 20,
        type: SearchType.LT,
      },
    ];

    const result = filterData(data, searchConditions);
    // output:
    <!-- [
      { firstName: 'Daniel', lastName: 'Johnson', age: 13 },
      { firstName: 'Jack', lastName: 'Danny', age: 19 },
    ] -->
    ```

1. caseSensitive.

    ```js
    import { filterData, SearchType } from 'filter-data';

    // search firstName contains 'dan'
    const searchConditions = [
      {
        key: 'firstName',
        value: 'dan',
        type: SearchType.LK,
      },
    ];

    const result = filterData(data, searchConditions, { caseSensitive: true });
    // output:
    <!-- [
      { firstName: 'Jordan', age: 17 },
    ] -->
    ```

1. offset & limit.

    ```js
    import { filterData, SearchType } from 'filter-data';

    // search firstName contains 'dan'
    const searchConditions = [
      {
        key: 'firstName',
        value: 'dan',
        type: SearchType.LK,
      },
    ];

    const result = filterData(data, searchConditions, { caseSensitive: true, offset: 10, limit: 10 });
    // output:
    <!-- [
      { firstName: 'Jordan', age: 17 },
      .
      .
      .
      max 10 records
    ] -->
    ```

1. search nested object.

    ```js
    import { filterData, SearchType } from 'filter-data';

    // search firstName in father's sub object equals to 'dan'
    const searchConditions = [
      {
        key: 'father.firstName', // or key: [['father', 'firstName']]
        value: 'dan',
        type: SearchType.EQ,
      },
    ];

    const result = filterData(data, searchConditions);
    // output:
    <!-- [
      { firstName: 'Jordan', age: 17, father: { firstName: 'dan', age: 50 } },
    ] -->
    ```

## Instructions

| No.   |      Parameter      | required | Default | Description |
|:---|:-------------:|:---------:|:--------------|:-----------|
| 1 |  data | 〇 | | array of object for filtering |
| 2 |  searchConditions | 〇 | | array of searchCondition; ```{ key: 'search column', value: 'search value', type: 'search type' }``` |
| 3 |  options |  | ```{ caseSensitive: false, includeNull: false, offset: undefined, limit: undefined }``` | includeNull: include data even `key` is not exist or `value` is null |

### SearchType

* ```SearchType.EQ```: equal
* ```SearchType.GT```: greater than
* ```SearchType.GTE```: greater than or equal
* ```SearchType.LT```: less than
* ```SearchType.LTE```: less than or equal
* ```SearchType.LK```: like
* ```SearchType.NE```: not equal
* ```SearchType.NLK```: not like

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).
