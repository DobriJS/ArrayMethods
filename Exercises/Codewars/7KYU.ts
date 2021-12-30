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
const removeDuplicateWords = (s: string): string => {
  const wordArray = s.split(' ');
  const wordSet = new Set(wordArray);
  const result = Array.from(wordSet).join(' ');
  return result;
};
