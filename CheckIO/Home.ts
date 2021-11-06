/* function replaceFirst(values: number[]): number[] {
    const [first, ...rest] = values;
    return first ? [...rest, first] : [];
 }
assert.deepEqual(replaceFirst([1, 2, 3, 4]), [2, 3, 4, 1]);
assert.deepEqual(replaceFirst([1]), [1]);
assert.deepEqual(replaceFirst([]), []);  */

//------
function correctSentence(text: string): string {
    return text[0].toUpperCase() + text.slice(1) + (text.slice(-1) == '.' ? '' : '.');
 }
assert.equal(correctSentence('greetings, friends'), 'Greetings, friends.');
assert.equal(correctSentence('Greetings, friends'), 'Greetings, friends.');
assert.equal(correctSentence('Greetings, friends.'), 'Greetings, friends.');