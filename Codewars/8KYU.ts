// Reversed Strings
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