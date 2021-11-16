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
} */

// Beginner Series #1 School Paperworks
function paperwork(n: number, m :number): number{
  if (n < 0 || m < 0) {
    return 0;
  }
  return n * m;
}