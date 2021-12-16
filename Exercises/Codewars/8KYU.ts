/* // Reversed Strings
 function solution(str: string): string {
    let newString = "";
      for (let i = str.length - 1; i >= 0; i--) {
          newString += str[i];
      }
      return newString;
  }

// Double Char
 function doubleChar(str: string): string{
    return str
    .split('')
    .map(c => c.repeat(2))
    .join('');
  }

// Can we divide it?
  function isDivideBy(number: number, a: number, b: number): boolean {
    return !(number % a || number % b);
  }

// Simple Fun #1: Seats in Theater
function seatsInTheater(nCols: number, nRows: number, col: number, row: number) {
  return (nCols-col+1) * (nRows - row);
}

// Keep Hydrated!
function litres(time: number): number {
  const waterDrinkedByAlexInHour = 0.5;
  return Math.floor(waterDrinkedByAlexInHour * time);
}

// Parse nice int from char problem
function get_age(age: string): number {
  return parseInt(age)
}

// Beginner Series #1 School Paperworks
function paperwork(n: number, m :number): number{
  if (n < 0 || m < 0) {
    return 0;
  }
  return n * m;
}

// Count of positives / sum of negatives
function countPositivesSumNegatives(input: any) {
  if(!input || input.length === 0) {
    return [];
  }

  return [
    input.filter((a: number) => a > 0).length,
    input.filter((a: number) => a < 0).reduce((acc: any, a: any) => acc + a, 0)
  ]
}
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));

// Exclamation marks series #4:
function remove(s: string): string {
  return s.split('').filter(c => c !== '!').join('') + '!';
}

// filter gooses
function gooseFilter (birds: string[]): string[] {
  const geese: string[] = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter((b:string) => geese.indexOf(b) < 0);
}

// Century From Year
const centuryFromYear = (year: number): number => {
  const century = Math.floor(year / 100);
  const decade = year % 100;
  return decade > 0 ? century + 1 : century;
}; */

// Correct the mistakes of the character recognition software
/* function correct(s: string): string {
  return s.replace(/0/g, 'O').replace(/1/g, 'I').replace(/5/g, 'S');
}

// Plural
function plural(n: number): boolean {
  return n !== 1;
} */

// What's the real floor ?
function getRealFloor(n: number): number {
  let floor: number;
  if (n < 1) {
    floor = n;
  } else if (n < 13) {
    floor = n - 1;
  } else {
    floor = n - 2;
  }
  return floor;
}

// Generate range of integers
function generateRange(min: number, max: number, step: number): number[] {
  let arr = [];
  for (let i = min; i <= max; i += step) {
    arr.push(i);
  }
  return arr;
}
