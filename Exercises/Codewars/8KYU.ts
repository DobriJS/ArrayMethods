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
/* function getRealFloor(n: number): number {
  let floor: number;
  if (n < 1) {
    floor = n;
  } else if (n < 13) {
    floor = n - 1;
  } else {
    floor = n - 2;
  }
  return floor;
} */

// Generate range of integers
/* function generateRange(min: number, max: number, step: number): number[] {
  let arr = [];
  for (let i = min; i <= max; i += step) {
    arr.push(i);
  }
  return arr;
} */

// Return Two Highest Values in List
/* function twoHighest(arr: number[]): number[] {
  let newSet = new Set(arr);
  return Array.from(newSet)
    .sort((a, b) => b - a)
    .slice(0, 2);
} */

// Student's Final Grade
/* function finalGrade(exam: number, projects: number): number {
  if (exam > 90 || projects > 10) {
    return 100;
  }
  if (exam > 75 && projects >= 5) {
    return 90;
  }
  if (exam > 50 && projects >= 2) {
    return 75;
  } else {
    return 0;
  }
} */

// Calculate BMI
/* function bmi(weight: number, height: number): string {
  // TODO: implement this method
  const bmi = weight / Math.pow(height, 2);

  if (bmi <= 18.5) return 'Underweight';
  else if (bmi <= 25.0) return 'Normal';
  else if (bmi <= 30.0) return 'Overweight';
  else if (bmi > 30) return 'Obese';
  else return '';
} */

// Switch it Up!
/* function switchItUp(intNumber: number): string {
  return [
    'Zero',
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine',
  ][intNumber];
} */

// Beginner Series #4 Cockroach
/* function cockroachSpeed(s: number): number {
  const secondsInHour = 3600;
  const cmInKm = 100000;
  return Math.floor((s * cmInKm) / secondsInHour);
} */

// Safen User Input Part I - htmlspecialchars
/* function htmlspecialchars(formData: string): string {
  const htmlChars = formData
    .split('')
    .map((char) => {
      if (char === '<') return '&lt;';
      if (char === '>') return '&gt;';
      if (char === '"') return '&quot;';
      if (char === '&') return '&amp;';
      return char;
    })
    .join('');
  return htmlChars;
} */

// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
/* function toAlternatingCase(s: string): string {
  return s
    .split('')
    .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
    .join('');
} */

// String Templates - Bug Fixing #5
/* class Kata1 {
  public static buildString(...template: string[]): string {
    let sentence: string = 'I like ' + template.join(', ') + '!';
    return sentence;
  }
} */

// Sentence Smash
/* function smash(words: string[]): string {
  return words.join(' ');
}
 */

// Find the position!
const position = (alphabet: string): string =>
  `Position of alphabet: ${'abcdefghijklmnopqrstuvwxyz'.indexOf(alphabet) + 1}`;
