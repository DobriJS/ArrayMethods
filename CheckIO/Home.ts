/* function replaceFirst(values: number[]): number[] {
    const [first, ...rest] = values;
    return first ? [...rest, first] : [];
 }
assert.deepEqual(replaceFirst([1, 2, 3, 4]), [2, 3, 4, 1]);
assert.deepEqual(replaceFirst([1]), [1]);
assert.deepEqual(replaceFirst([]), []);  */

//------
/* function correctSentence(text: string): string {
    return text[0].toUpperCase() + text.slice(1) + (text.slice(-1) == '.' ? '' : '.');
 }
assert.equal(correctSentence('greetings, friends'), 'Greetings, friends.');
assert.equal(correctSentence('Greetings, friends'), 'Greetings, friends.');
assert.equal(correctSentence('Greetings, friends.'), 'Greetings, friends.'); */

//-----
/* function isAcceptablePassword(password: string): boolean {
    // your code here
    return password.length > 6;
}
assert.equal(isAcceptablePassword('short'), false);
assert.equal(isAcceptablePassword('muchlonger'), true);
assert.equal(isAcceptablePassword('ashort'), false); */

//-----
/* function nearestValue(values: number[], search: number): number {
    let arr = values.sort((x, y) => x - y).map(x => Math.abs(x - search));

  return values[arr.indexOf(Math.min(...arr))];
}
assert.equal(nearestValue([4, 7, 10, 11, 12, 17], 9), 10);
assert.equal(nearestValue([4, 7, 10, 11, 12, 17], 8), 7);
assert.equal(nearestValue([4, 8, 10, 11, 12, 17], 9), 8);
assert.equal(nearestValue([4, 9, 10, 11, 12, 17], 9), 9);
assert.equal(nearestValue([4, 7, 10, 11, 12, 17], 0), 4);
assert.equal(nearestValue([4, 7, 10, 11, 12, 17], 100), 17);
assert.equal(nearestValue([5, 10, 8, 12, 89, 100], 7), 8);
assert.equal(nearestValue([-1, 2, 3], 0), -1); */

//-----
/* function easyUnpack(values: any[]): any[] {
    // your code here
    return [values[0], values[2], values[values.length - 2]];
}
assert.deepEqual(easyUnpack([1, 2, 3, 4, 5, 6, 7, 9]), [1, 3, 7]);
assert.deepEqual(easyUnpack([1, 1, 1, 1]), [1, 1, 1]);
assert.deepEqual(easyUnpack([6, 3, 7]), [6, 7, 3]); */

//-----
/* interface Stock {
    name: string,
    price: number,
}; */
/* function biggerPrice(limit: number, data: Stock[]): Stock[] {
     let output = [...data].sort((a,b) => b.price - a.price).splice(0, limit);
    return output;
}
console.log(biggerPrice(2, [
    {"name": "bread", "price": 100},
    {"name": "wine", "price": 138},
    {"name": "meat", "price": 15},
    {"name": "water", "price": 1}
])); */

//------
/* function popularWords(text: string, words: string[]) {
    const poplsWords = {};
   const strArr = text.toLowerCase().split(/\s+/);
   for (let word of words) {
     poplsWords[word] = strArr.filter(x => x === word).length;
   }
   return poplsWords;
}
console.log(popularWords(`
When I was One
I had just begun
When I was Two
I was nearly new`, ['i', 'was', 'three', 'near'])) */

//------
/* function splitList(values:number[]):number[][]{
    const splitArr = [...values];
    const fixedVal = Number((values.length / 2).toFixed(0));
    return [splitArr.slice(0,fixedVal), splitArr.slice(fixedVal)];
}
splitList([1, 2, 3, 4, 5, 6])  // [[1, 2, 3], [4, 5, 6]] */

//-----
function nonUniqueElements(data: number[]): number[] {
    return data.filter(element => {
         return data.indexOf(element) !== data.lastIndexOf(element);
    });
}
console.log(nonUniqueElements([1, 2, 3, 1, 3])) // [1, 3, 1, 3]

//-----
function countDigits(text: string): number {
    let digits = 0;
   for (let char of text){
       if(/[0-9]/.test(char)){
           digits++
       }
   }
   return digits;
}
countDigits('who is 1st here') // 1