# filter-data

[![npm version](https://badge.fury.io/js/filter-data.svg)](https://badge.fury.io/js/filter-data)
[![dependencies Status](https://david-dm.org/thundermiracle/filter-data/status.svg)](https://david-dm.org/thundermiracle/filter-data)
[![devDependencies Status](https://david-dm.org/thundermiracle/filter-data/dev-status.svg)](https://david-dm.org/thundermiracle/filter-data?type=dev)
[![peerDependencies Status](https://david-dm.org/thundermiracle/filter-data/peer-status.svg)](https://david-dm.org/thundermiracle/filter-data?type=peer)
[![CircleCI](https://img.shields.io/circleci/build/github/thundermiracle/filter-data/master)](https://circleci.com/gh/thundermiracle/filter-data)
[![codecov](https://img.shields.io/codecov/c/github/thundermiracle/filter-data)](https://codecov.io/gh/thundermiracle/filter-data)

## Description

Simple but fast data filter.

## Benchmark

### _100 Records_(ms)

  _*The results are little different in partial search._

|  | match-sorter (4.0.2) | fuse.js (3.4.6) | filter-data (0.1.1) |
| :--- | :--: | :-: | :--: |
| match all, 1 key | 3.272ms | 3.207ms | <span style="color: green">1.172ms</span> |
| no match, 1 key | <span style="color: green">1.523ms</span> | 6.629ms | 1.706ms |
| match partial, 1 key | 2.483ms | 4.117ms | <span style="color: green">1.130ms</span> |
| match all, 2 keys | 3.907ms | 3.655ms | <span style="color: green">1.466ms</span> |
| no match, 2 keys | 1.921ms | 8.209ms | <span style="color: green">1.471ms</span> |
| match partial, 2 keys | 1.958ms | 5.830ms | <span style="color: green">1.394ms</span> |
| match all, 1 key, slice(0,10) | 3.324ms | 3.630ms | <span style="color: green">1.524ms</span> |
| no match, 1 key, slice(0,10) | 1.964ms | 4.944ms | <span style="color: green">1.162ms</span> |
| match partial, 1 key, slice(0,10) | 3.011ms | 4.838ms | <span style="color: green">1.863ms</span> |
| input empty | <span style="color: green">0.006ms</span> | 0.056ms | 0.109ms |

### _10000 Records_(ms)

  _*The results are little different in partial search._

|  | match-sorter (4.0.2) | fuse.js (3.4.6) | filter-data (0.1.1) |
| :--- | :--: | :-: | :--: |
| match all, 1 key | 111.281ms | 68.690ms | <span style="color: green">14.884ms</span> |
| no match, 1 key | 69.560ms | 63.553ms | <span style="color: green">12.245ms</span> |
| match partial, 1 key | 84.315ms | 83.006ms | <span style="color: green">17.690ms</span> |
| match all, 2 keys | 189.732ms | 86.417ms | <span style="color: green">32.801ms</span> |
| no match, 2 keys | 87.112ms | 91.501ms | <span style="color: green">13.870ms</span> |
| match partial, 2 keys | 92.896ms | 123.191ms | <span style="color: green">44.515ms</span> |
| match all, 1 key, slice(0,10) | 137.180ms | 81.718ms | <span style="color: green">0.204ms</span> |
| no match, 1 key, slice(0,10) | 68.765ms | 63.469ms | <span style="color: green">18.511ms</span> |
| match partial, 1 key, slice(0,10) | 82.715ms | 91.082ms | <span style="color: green">0.393ms</span> |
| input empty | <span style="color: green">0.007ms</span> | 4.665ms | 0.375ms |

## Installation

filter-data is available as an [npm package](https://www.npmjs.org/package/filter-data).

```sh
npm install --save filter-data
```

## Usage

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
