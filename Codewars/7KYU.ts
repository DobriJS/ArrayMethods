// Descending Order
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
};