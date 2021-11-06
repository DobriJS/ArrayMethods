function replaceFirst(values: number[]): number[] {
    const [first, ...rest] = values;
    return first ? [...rest, first] : [];
 }

/* assert.deepEqual(replaceFirst([1, 2, 3, 4]), [2, 3, 4, 1]);
assert.deepEqual(replaceFirst([1]), [1]);
assert.deepEqual(replaceFirst([]), []); */