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
}
