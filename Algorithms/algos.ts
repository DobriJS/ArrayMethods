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
function addBorder(picture: string[]): any {
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
console.log(addBorder(['abc', 'ded']));