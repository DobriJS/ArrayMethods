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
