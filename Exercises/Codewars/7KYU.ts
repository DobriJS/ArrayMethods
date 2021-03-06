/* // Descending Order
function descendingOrder(n: number): number {
    return parseInt(n.toString().split('').sort().reverse().join(''));
  }

// Thinking & Testing: A and B?
function testit(a: number, b: number): number {
  return a | b ;
}

// Sum of odd numbers
function rowSumOddNumbers(n: number) {
  return Math.pow(n, 3)
}

// Invite more women
const inviteMoreWomen = (l: number[]): boolean => l.reduce((acc,el)=> acc + el, 0) > 0;
inviteMoreWomen([1, -1, 1, -1]);

// Minimum value
const minValue = (values: number[]): number => {
  return Number.parseInt(values.filter((num, index) => values.indexOf(num) == index).sort().join(""));
}; */

/* // Fix string case
function solve(s: string) {
  let countUpper = 0;
  let countLower = 0;
  for (let char of s.split('')) {
    if (char === char.toUpperCase()) {
      countUpper++;
    } else {
      countLower++;
    }
  }
  return countUpper > countLower ? s.toUpperCase() : s.toLowerCase();
}
console.log(solve("coDe"));

// Shortest Word
function findShort(s: string): number {
  return Math.min(...s.split(" ").map((w) => w.length));
}

//Even nums in an array
function evenNumbers(array: number[], n: number): number[] {
  return array.filter(x => x % 2 === 0).slice(-n);
}

// isSortedAndHow
function isSortedAndHow(array:number[]): string {
  if (array.every((x,i,a) => i === 0 || a[i-1] <= x)) return "yes, ascending";
  if (array.every((x,i,a) => i === 0 || a[i-1] >= x)) return "yes, descending";
  return "no";
}

// Test Your Knowledge Of Function Scope
function add(x: number): Function {
  return function (y: number): number {
    return x + y;
  }
}

// Ironman Triathlon
function iTri(s: number){
  if (s === 0) {
    return 'Starting Line... Good Luck!';
  }
  if (s < 2.4) {
    return {Swim:`${(140.60 - s).toFixed(2)} to go!`};
  }
  if (s < 2.4 + 112) {
    return  {Bike:`${(140.60 - s).toFixed(2)} to go!`};
  }
  if (s < 2.4 + 112 + 16.2) {
    return {Run:`${(140.60 - s).toFixed(2)} to go!`};
  }
  if (s < 2.4 + 112 + 26.2) {
    return {Run:'Nearly there!'};
  }

  return "You're done! Stop running!";
} */

// Beginner Series #3 Sum of Numbers
/* function getSum(a: number, b: number): number {
  const start = a < b ? a : b;
  const end = start === a ? b : a;
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
} */

// Numbers to Objects
/* function numObj(s: number[]) {
  return s.map(n => {
    return { [n]: String.fromCharCode(n) };
  });
} */

// Average Scores
/* function average(scores: number[]): number {
  return Math.round(scores.reduce((v1, v2) => v1 + v2) / scores.length);
} */

// Opposite Attract
/* function lovefunc(flower1: number, flower2: number): boolean {
  return (flower1 + flower2) % 2 === 1;
} */

// Sort the Vowels
/* const vowels = 'aeiou';
const sortVowels = (str?: number | string | null): string =>
  typeof str === 'number' || !str
    ? ''
    : str
        .split('')
        .map((char) =>
          vowels.includes(char.toLowerCase()) ? `|${char}` : `${char}|`
        )
        .join('\n'); */

// Maximum Product
/* function adjacentElementsProduct(arr: number[]): number {
  let sum: number = arr[0] * arr[1];
  for (let i: number = 0; i < arr.length - 1; i += 1) {
    let temp: number = arr[i] * arr[i + 1];
    if (temp > sum) {
      sum = temp;
    }
  }
  return sum;
} */

// Highest and Lowest
/* class Kata {
  static highAndLow(numbers: string) {
    const max = Math.max(...numbers.split(' ').map((i) => +i));
    const min = Math.min(...numbers.split(' ').map((i) => +i));

    return `${max} ${min}`;
  }
} */

// Array plus Array
/* const arrayPlusArray = (arr1: number[], arr2: number[]): number => {
  const arrNums: number[] = [...arr1, ...arr2];
  return arrNums.reduce((acc, val) => acc + val);
}; */

// Regex validate PIN code
/* class Kata {
  static pinFormat: RegExp = new RegExp(/^\d{4}(\d{2})?$/);

  static validatePin(pin: string): boolean {
    return Kata.pinFormat.test(pin);
  }
} */

// Char Code Calculation
/* function calc(str: string): number {
  const charCodes = str.split('').map((char) => char.charCodeAt(0));
  return sum(charCodes) - sum(charCodes.map(replace7with1));
}

function sum(arr: number[]): number {
  return arr.reduce((total, x) => total + x, 0);
}

function replace7with1(num: number): number {
  return parseInt(num.toString().replace(/7/g, '1'));
} */

// Isograms
/* function isIsogram(str: string): boolean {
  let copyStr = str.toLowerCase();
  let charsSet = new Set(copyStr.split(''));
  return charsSet.size === copyStr.length;
} */

// is Triangle ?
/* function isTriangle(a: number, b: number, c: number): boolean {
  return a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && c + b > a;
} */

// Incrementer
/* const incrementer = (nums: number[]): number[] => {
  return nums.map((n: number, i: number) => (n + i + 1) % 10);
}; */

// Remove duplicate words
/* const removeDuplicateWords = (s: string): string => {
  const wordArray = s.split(' ');
  const wordSet = new Set(wordArray);
  const result = Array.from(wordSet).join(' ');
  return result;
}; */

// Find the calculation type
/* const calcType = (a: number, b: number, res: number): string => {
  if (a + b == res) {
    return 'addition';
  }
  if (a - b == res) {
    return 'subtraction';
  }
  if (a / b == res) {
    return 'division';
  } else {
    return 'multiplication';
  }
}; */

// Square Every Digit
/* class Kata {
  static squareDigits(num: number) {
    return parseInt(
      num
        .toString()
        .split('')
        .map((c) => parseInt(c, 10))
        .map((n) => n * n)
        .map((n) => n.toString())
        .join(''),
      10
    );
  }
} */

// Mumbling
/* function accum(s: string): string {
  return s
    .split('')
    .map((elem, index) => elem.toUpperCase() + elem.toLowerCase().repeat(index))
    .join('-');
} */

// No oddities here
/* function noOdds(values: number[]): number[] {
  let noOddsArray = values.filter((num) => num % 2 === 0);
  return noOddsArray;
} */

// Two to One
/* class G964 {
  public static longest = (s1, s2) => {
    return (s1 + s2)
      .split('')
      .sort()
      .filter(
        (letter: string, index: number, arr: Array<string>) =>
          arr.indexOf(letter) === index
      )
      .join('');
  };
}
 */

// Say "Hello World" JS Style
/* const say = (string1: string) => {
  return (string2: string) => `${string1} ${string2}`;
}; */

// Alternate capitalization
/* function capitalize(s: string) {
  let s1: string = '';
  let s2: string = '';

  s.split('').forEach((elem, index) => {
    s1 += index % 2 ? elem : elem.toUpperCase();
    s2 += index % 2 ? elem.toUpperCase() : elem;
  });

  return [s1, s2];
} */

// Get the Middle Character
/* class Challenge {
  static getMiddle(s: string) {
    const middle = s.length / 2;
    const lowIndex = Math.ceil(middle - 1);
    const highIndex = Math.floor(middle + 1);

    return s.slice(lowIndex, highIndex);
  }
}

// Small enough? - Beginner
function smallEnough(a: number[], limit: number): boolean {
  return a.every((val) => val <= limit);
} */

// Two oldes ages
/* function twoOldestAges(ages: number[]): number[] {
  const arr = [...ages];
  return arr.sort((a, b) => a - b).splice(-2);
} */

// Disemvowel Trolls
/* class Kata {
  static disemvowel(str: string): string {
    return str.replace(/[aeiou]/gi, '');
  }
} */

// You're a square!
/* function isSquare(n: number): boolean {
  return Number.isInteger(Math.sqrt(n));
} */

// Single digit
/* function singleDigit(n: number): number {
  function bitCount(m: number): number {
    return (m.toString(2).match(/1/g) || []).length;
  }
  return n > 9 ? singleDigit(bitCount(n)) : n;
} */

// Sum of the first nth term of Series
/* function SeriesSum(n: number) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += 1 / (1 + 3 * i);
  }

  return sum.toFixed(2);
} */

// Printer Errors
class G964 {
  public static printerError(s: string): string {
    let r = s.replace(/[a-m]/g, '');
    return r.length + '/' + s.length;
  }
}

// Collision Detection
function collision(
  x1: number,
  y1: number,
  r1: number,
  x2: number,
  y2: number,
  r2: number
): boolean {
  return Math.hypot(x2 - x1, y2 - y1) <= r1 + r2;
}
