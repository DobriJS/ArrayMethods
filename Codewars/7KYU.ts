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

// Fix string case
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

// Shrotest Word
function findShort(s: string): number {
  return Math.min(...s.split(" ").map((w) => w.length));
}

//Even nums in an array
function evenNumbers(array: number[], n: number): number[] {
  return array.filter(x => x % 2 === 0).slice(-n);
}