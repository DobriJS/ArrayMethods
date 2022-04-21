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
