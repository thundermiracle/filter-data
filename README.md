# filter-data

[![npm version](https://badge.fury.io/js/filter-data.svg)](https://badge.fury.io/js/filter-data)
[![dependencies Status](https://david-dm.org/thundermiracle/filter-data/status.svg)](https://david-dm.org/thundermiracle/filter-data)
[![devDependencies Status](https://david-dm.org/thundermiracle/filter-data/dev-status.svg)](https://david-dm.org/thundermiracle/filter-data?type=dev)
[![peerDependencies Status](https://david-dm.org/thundermiracle/filter-data/peer-status.svg)](https://david-dm.org/thundermiracle/filter-data?type=peer)
[![CircleCI](https://img.shields.io/circleci/build/github/thundermiracle/filter-data/master)](https://circleci.com/gh/thundermiracle/filter-data)
[![codecov](https://img.shields.io/codecov/c/github/thundermiracle/filter-data)](https://codecov.io/gh/thundermiracle/filter-data)

## Description

filter and slice data array.

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
| 3 |  options |  | ```{ caseSensitive: false, includeNull: false, offset: undefined, limit: undefined }``` |  |

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
