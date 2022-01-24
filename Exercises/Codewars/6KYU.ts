// Mexican Wave
function wave(str: string): Array<string> {
  return str.split('').reduce((wave, char, index) => {
    if (char === ' ') {
      return wave;
    }
    wave.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
    return wave;
  }, []);
}

// Build Tower
const towerBuilder = (n: number): string[] => {
  const result: string[] = [];
  for (let i = 1; i <= n; i++) {
    result.push(' '.repeat(n - i) + '*'.repeat(i * 2 - 1) + ' '.repeat(n - i));
  }
  return result;
};
