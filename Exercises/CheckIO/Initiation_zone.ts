// First Word (simplified)
function firstWord(text: string): string {
  return text.split(' ')[0];
}

// Easy Unpack
function easyUnpack(values: any[]): any[] {
  // your code here
  return [values[0], values[2], values[values.length - 2]];
}

// Acceptable Password I
function isAcceptablePassword(password: string): boolean {
  return password.length > 6;
}

// Number Length
function numberLength(value: number): number {
  return value.toString().length;
}

// End Zeros
function endZeros(value: number): number {
  const str = String(value);
  return str.length - str.replace(/0*$/, '').length;
}

// Backward String
function backwardString(value: string): string {
  let reversed = '';
  for (let i = value.length - 1; i >= 0; i--) {
    reversed += value[i];
  }
  return reversed;
}

// Remove All Before
function removeAllBefore(values: number[], b: number): number[] {
  if (values.length === 0) return values;
  if (!values.includes(b)) return values;
  let numIndex = values.indexOf(b);
  return values.slice(numIndex);
}

// All Upper 1
function isAllUpper(text: string): boolean {
  return text === text.toUpperCase();
}

// Replace First
function replaceFirst(values: number[]): number[] {
  if (values.length <= 2) return values;
  values.push(values.shift());
  return values;
}
