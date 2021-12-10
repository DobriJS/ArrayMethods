/* const absoluteValueSumMinimization = (a: number[]): number => {
    const isEven = a.length % 2 === 0;
    return isEven ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)];
}

console.log(absoluteValueSumMinimization([2,4,7])); */

// -----
/* const add = (...param1: number[]): number => {
    let total = 0;
    param1.forEach((num) => {
        total += num;
    });
    return total;
}
console.log(add(1,2,3,4,5)); */

// ----
/* function addBorder(picture: string[]): any {
    const lengthOfWall = picture[0].length + 2;
    let wall = '';

    for (let i = 0; i < lengthOfWall; i++) {
        wall = wall.concat('*');
    }
    picture.unshift(wall);
    picture.push(wall);

    for (let i = 1; i < picture.length - 1; i++) {
        picture[i] = '*'.concat(picture[i], '*');
    }
    return picture;
}
console.log(addBorder(['abc', 'ded'])); */

//------
/* function addTwoDigits(n: any): number {
    const nums = n.toString().split('');
    return parseInt(nums[0] + parseInt(nums[1]));
}
console.log(addTwoDigits(29)); */

//-----
/* function adjacentElementsProduct(inputArray: number[]): number {
    let largestProduct = inputArray[0] * inputArray[1];

    for(let i = 1; i < inputArray.length - 1; i++) {
        const product = inputArray[i] * inputArray[i + 1];
        largestProduct = largestProduct < product ? product : largestProduct;
        }
        return largestProduct;
}
console.log(adjacentElementsProduct([3,6,-2,-5,7,3])); */

//-----
/* function allLongestStrings(inputArray: string[]): string[] {
    let longestLength = 0;
    const longestWords: string[] = [];

    inputArray.forEach((word: string) => {
        longestLength = longestLength < word.length ? word.length : longestLength;
    });

    inputArray.forEach((word: string) => {
        if (word.length === longestLength) {
            longestWords.push(word);
        }
    });
    return longestWords;
}
console.log(allLongestStrings(['abadss', 'aaa', 'ad', 'dwrew', 'ddd', 'abab'])); */

//-----
/* function almostIncreasingSequence(sequence: number[]): boolean {
    let count = 0;

    for(let i = 0; i < sequence.length; i++) {
        if (sequence[i] <= sequence[i - 1]) {
            count++;
            if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) {
                return false;
            }
        }
    }
    return count <= 1;
}
console.log(almostIncreasingSequence([1,3,1,2]));
console.log(almostIncreasingSequence([1,3,2])); */

//-----
/* function alternatingSums(a: number[]): number[] {
    let evenSum = 0;
    let oddSum = 0;

    a.forEach((el, idx) => {
        if (idx % 2 === 0) {
            evenSum += el;
        } else {
            oddSum += el;
        }
    });
    return [evenSum, oddSum];
}
console.log(alternatingSums([50, 60, 60, 45, 70])); */

// Array Conversion
// inputArray = [1,2,3,4,5,6,7,8] output should be 186
// [1,2,3,4,5,6,7,8] -> [3,7,11,15] -> [21,156] -> [186]
function arrayConversion(inputArray: number[]): number {
  let isOdd = true;

  while (inputArray.length !== 1) {
    inputArray = sumProduct(inputArray, isOdd);
    isOdd = !isOdd;
  }
  return inputArray[0];
}

function sumProduct(nums: number[], isOdd: boolean): number[] {
  const sumProducts: number[] = [];

  if (isOdd) {
    for (let i = 0; i < nums.length; i += 2) {
      sumProducts.push(nums[i] + nums[i + 1]);
    }
  } else {
    for (let i = 0; i < nums.length; i += 2) {
      sumProducts.push(nums[i] * nums[i + 1]);
    }
  }
  return sumProducts;
}
console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
