import type SearchType from './SearchType';

export interface FilterDataOption {
  caseSensitive?: boolean;
  includeNull?: boolean;
  offset?: number;
  limit?: number;
}

export interface SearchCondition {
  key: string | string[];
  value: string | number;
  type: SearchType;
}

export interface SearchConditionMultiple {
  key: string | string[] | string[][];
  value?: string | number;
  type: SearchType;
}

export type DataObjectValues = string | number | (string | number)[];
export interface DataObject {
  [key: string]: DataObjectValues | DataObject;
}

export type DataObjectWithNullValues = DataObjectValues | null;

export interface DataObjectWithNull {
  [key: string]: DataObjectWithNullValues | DataObjectWithNull;
}

export type Predicator = (data: DataObject) => boolean;

export type FilterFunction = (
  conditions: SearchCondition,
  caseSensitive: boolean,
  data: DataObject,
) => boolean;
