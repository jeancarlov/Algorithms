// function maxNum(x, y) {
//   let total = Math.max(x, y);
//   return total;
// }

// let result = maxNum(10, 20);
// console.log(result);

// function testNum(x) {
//     if ( x === 2) {
//         return "isTwo"
//     } else {
//         return "No repeated again"
//     }
// }

// let result2 = testNum(2);
// console.log(result2);

// basic version
// const numbersBasic = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let n of numbersBasic)
// sum += n

// console.log(sum);
// Improve version with reduce method
// const numbers = [1, 2, 3, 4, 6];
// let sumReduce = numbers.reduce((acc, number) =>{
//     return acc + number;
// },20);
// console.log(sumReduce);

//--------------------------------------
//fizz buzz
// function fizzbuzz() {
//     for (let n = 0; n < 20; n++) {
//       if (n % 3 === 0 && n % 5 === 0) {
//         console.log("FizzBuzz");
//       } else if (n % 3 === 0) {
//         console.log("Fizz");
//       } else if (n % 5 === 0) {
//         console.log("Buzz");
//       } else {
//         console.log(n);
//       }
//     }
// }

// fizzbuzz();

// function min(x, y) {
//   return Math.min(x, y);
// }
// console.log(min(20, 10));


// let arrays = [[1, 2, 3], [4, 5], [6]];

// console.log(arrays.reduce((flat, current) => flat.concat(current), []));

//----------------------------

// let data = [[1, 2, 3], [4, 5], [6]];

// function flatten(arr) {
//   let flatArray = [];

//   arr.forEach(element => {
//     if (Array.isArray(element)) {
//       flatArray = flatArray.concat(flatten(element))
//     }
//     else{
//       flatArray.push(element)
//     }
//   });
//   return flatArray 
// }

// const newArray = flatten(data)

// console.log(newArray);

//----------------------------

//es6 improve version for flatten array

// const matrix = [ [2,3,4], [6,7,8]]

// const flatArrayEs6 = matrix.flat(1);

// console.log(flatArrayEs6);

function power(x,y) {
  let total = Math.pow(x,y);
  return total
}

let result =power(2,0) // 1
console.log(result);
power(2,2) // 4
power(2,4) // 16