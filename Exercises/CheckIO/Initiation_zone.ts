// First Word (simplified)
function firstWord(text: string): string {
  return text.split(' ')[0];
}

// Easy Unpack
function easyUnpack(values: any[]): any[] {
  // your code here
  return [values[0], values[2], values[values.length - 2]];
}
