function maxNum(x, y) {
  let total = Math.max(x, y);
  return total;
}

let result = maxNum(10, 20);
console.log(result);

function testNum(x) {
    if ( x === 2) {
        return "isTwo"
    } else {
        return "No repeated again"
    }
}

let result2 = testNum(2);
console.log(result2);

// basic version
const numbersBasic = [1, 2, 3, 4, 5];
let sum = 0;
for (let n of numbersBasic)
sum += n

console.log(sum);
// Improve version with reduce method
const numbers = [1, 2, 3, 4, 6];
let sumReduce = numbers.reduce((acc, number) =>{
    return acc + number;
},20);
console.log(sumReduce);


