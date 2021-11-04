import { push } from './push';

//** Filter */
type FilterCallback<T> = (value: T, index: number, array: T[]) => boolean;

 function filter<T>(array: T[], callback: FilterCallback<T>) {
  const result: any[] = [];

  const { length } = array;

  for (let index = 0; index < length; index += 1) {
    const value = array[index];

    if (callback(value, index, array)) {
      push(result, value);
    }
  }

  return result;
}

//** ForEach */
type ForEachCallback<T> = (value: T, index: number, array: T[]) => void;

 function forEach<T>(array: T[], callback: ForEachCallback<T>) {
  const { length } = array;

  for (let index = 0; index < length; index += 1) {
    const value = array[index];

    callback(value, index, array);
  }
}