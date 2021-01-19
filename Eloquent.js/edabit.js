function numberSplit(n) {
    let initialArr = n.toString(10);
    // console.log(n);
    // let arrSplit=initialArr.split()
    // console.log(arrSplit);
    let dividedArr= Math.floor(n/2) 
    let remaindingArr= Math.round(n/2);
    let totalArr= [dividedArr,remaindingArr]
    // console.log(dividedArr);
    // console.log(remaindingArr);
    // console.log(totalArr);
    return totalArr
}

let result01 = numberSplit(-9);
// console.log(result01);

let numberSplitEs6 = (n) => [Math.floor(n / 2), Math.ceil(n / 2)];

// person constructor
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge(other) {
    let i = Math.sign(other.age - this.age),
      x = ["the same age as", "older than"][i] || "younger than";
    return `${other.name} is ${x} me.`;
  }
}

class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge(other) {
    if (this.age < other.age) {
      return `${other.name} is older than me.`;
    } else if (this.age > other.age) {
      return `${other.name} is younger than me.`;
    } else {
      return `${other.name} is the same age as me.`;
    }
  }
}

// Filter out strings from an array
// Take an array of non-negative integers and strings and return a new array without the strings.

function filterArray(arr) {
 return arr.filter((n) => typeof n === "number");
}

function filterArray2(arr) {
  return arr.filter((num) => Number.isInteger(num));
}

function filterArrayLeastOption(arr) {
  let intArry = [];
  for (const value of arr) {
    if (typeof value === "number") intArry.push(value);
  }
  return intArry;
}

let result02 =filterArray([1, 2, "aasf", "1", "123", 123])// [1, 2, 123]
let result03 =filterArray2([1, 2, "a", "b"]) // [1, 2]

// console.log(result02);
// console.log(result03);


function stringCycling(a, b) {
    let firstSection = a.length;
    let secondSection = b.length;
if (firstSection !== secondSection) {
    return a.repeat(secondSection).substring(0,secondSection)
}
}

let result04= stringCycling("abc", "hello");
// console.log(result04);

// Using Recursion
function findHighest(arr) {
      let descent = arr.sort((a,b) => a > b ? -1: 1);
      let newTest = descent[0];
      return newTest
}

let result05 = findHighest([0, 12, 4, 87]);
// console.log(result05);

//Quantifiers indicate numbers of characters or expressions to match. ex "caandy".match(/a{2,}/) 
const REGEXP = /\.{3,}/g;
let result06 = "Hello!... Wait. How goes?..... GoodBye!..".match(REGEXP);
// console.log(result06); // [ '...', '.....' ]

//Create a function that takes a string and returns a string in which each character is repeated once.
function doubleChar(str) {
 let originalStr = str.split('')
 let repeatStr = str.repeat(2).split("");
}
 let mapped = originalStr.map()
 console.log(repeatStr);
 console.log(originalStr);
 


const differenceWith = (arrVal, othVal, comp) => {
  return arrVal.filter((x) => othVal.every((y) => !comp(x, y)));
}
