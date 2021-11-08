import { push } from './push';
import { logOperation } from './logOperation';

type FilterCallback<T> = (value: T, index: number, array: T[]) => boolean;

export function filter<T>(array: T[], callback: FilterCallback<T>) {
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

logOperation('filter', [1, 2, 3, 4, 5], array => filter(array, value => value >= 2));