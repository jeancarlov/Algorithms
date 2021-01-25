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
const numbers = [1, 2, 3, 4, 6];
let sumReduce = numbers.reduce((acc, number) =>{
    return acc + number;
},20);
console.log(sumReduce);

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
// console.log(result);
power(2,2) // 4
power(2,4) // 16



function detectWord(str) {
 
  let arr= str.split('')
  let filtered = arr.filter((val) => {
    return val.length === 1 && val.match(/[a-z]/)
  })
  // console.log(filtered);
  let newArr= filtered.join('')
  // console.log(newArr);
  return newArr;
 
  

}
;
let result1=detectWord("bEEFGBuFBRrHgUHlNFYaYr"); 
// console.log(result1);


//solution 2 with for loop
function detectWord2(str) {
  let wanted = "";
  for (let letter of str) {
    if (letter === letter.toLowerCase()) {
      wanted = wanted + letter;
    }
  }
  return wanted;
}

// solution 3 and best answer 

const detectWord3 = (str) => str.replace(/[A-Z]/g, "");

// -----------------------
// function tuckIn(arr1, arr2) {

//   newCombination = [...arr1,...arr2]
//   return newCombination;
  
// }

// let newFun = (a, b) => b - a;
// tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]).sort(newFun);
// console.log(newFun);

// let result2 = tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]);
// console.log(result2);

function tuckInCrazyMix(arr1, arr2) {
newCombination = [...arr1,...arr2]
    for (let i = 0; i < newCombination.length; i++) {
       for (let j = 0; j < newCombination.length; j++) {
           if (newCombination[j] > newCombination[j+1]) {
               //Swap
               let tmp = newCombination[i];
               newCombination[j] = newCombination[j + 1];
               newCombination[j + 1] = tmp;
           }
       }    
    }
    return newCombination
}


 

function tuckIn(arr1, arr2) {
  return [arr1[0], ...arr2, arr1[1]]; 
}
let result2 = tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]);
// console.log(result2); // [ 1, 2, 3, 4,  5,  6, 7, 8, 9, 10]

// another solution 2
const tuckIn2 = ([a, c], b) => [a, ...b, c];

// another solution 3
function tuckIn3(arr1, arr2) {
  arr2.push(arr1[1]);
  arr2.unshift(arr1[0]);
  return arr2;
}

// Getting date and testing true or false 
// function timeForMilkAndCookies(date) {
//  let day = date.getDate();
//  let month = date.getMonth();
//  console.log(day);
//  console.log(month);
//  if (day === 24 && month === 11) {
//    return true
//  }else{
//    return false
//  }

// }

// let result3= timeForMilkAndCookies(new Date(2013, 11, 24));
// console.log(result3);


// Create a function that will take a HEX number and returns the binary equivalent (as a string).

// function toBinary(num) {
//   return num.toString(2);
// }

// let result4= toBinary(0xff);
// console.log(result4);



function charCount(myChar, str) { 
   let count = 0;
   for (let i = 0; i < str.length; i++) {
     const element = str[i];
     if (str.charAt(i) == myChar) {
       count += 1;
     }
     
   }
   return count
}

let result5= charCount("c", "Chamber of secrets");
// let result5= charCount("a", "edabit");


function charCountFilter(myChar, str) {
  return [...str].filter((x) => x === myChar).length;
}


 charCountSplit = (char, str) => str.split(char).length - 1;


 function charCountRegex(myChar, str) {
   return (str.match(new RegExp(myChar, "g")) || []).length;
 }

 function charCountSplitFilter(myChar, str) {
   return str.split("").filter((char) => char === myChar).length;
 }



 function footballPoints(wins, draws, losses) {
   let winPoints = 3 * wins;
   let drawPoints = 1 * draws;
   let total = winPoints + drawPoints;
   return total;
 }

 let result6= footballPoints(3, 4, 2);


 const footballPointsEs6 = (a, b, c) => a * 3 + b;

function divisibleByFive(n) {
 if (n % 5 === 0) {
    return true;
 } else{
   return false;
 }
}

let result7=divisibleByFive(56);
console.log(result7);// false


const areaEs6 = (h, w) => (h > 0 && w > 0 ? h * w : -1);

function convert(minutes) {
  return minutes *60 
}
convert(5);


function isTrue(relation) {
return eval(relation.replace("=", "==="));
}

const isTrueEs6 = (relation) => eval(relation.replace("=", "==="));


function largestSwap(num) {
  let numberA = num.toString().charAt(0).split("");
  let numberB = num.toString().charAt(1).split("");
  // console.log(numberB);
  return numberA >= numberB
   
}

let result9 =largestSwap(27);// correct 



const largestSwap1 = (num) =>
  Number(num.toString().split("").reverse().join("")) <= num;

  // let result10 = largestSwap(27);
  // console.log(result10);

  function largestSwap3(num) {
    return Number(num.toString()[0]) >= Number(num.toString()[1]);
  }


  function largestSwap4(num) {
    return num / 10 > num % 10;
  }

function isFirstSuperior(arr1, arr2) {
 return arr1 > arr2
}

let result11=isFirstSuperior([1, 2, 3, 4], [1, 2, 4, 4])// false


// write an erro function without using switch or if statments
function error(n) {
	let obj = {
	1 : "Check the fan: e1",
	2 : "Emergency stop: e2",
	3 : "Pump Error: e3",
	4 : "c: e4",
	5 : "Temperature Sensor Error: e5"
  };
  return obj[n] || 101;

}

let result12 = error(7);
console.log(result12);


function generation(n,y) {

 let obj1 = {
   "-3": "great grandmother",
   "-2": "grandmother",
   "-1": "mother",
   "0": "me!",
   "1": "daughter",
   "2": "granddaughter",
   "3": "great granddaughter",
 }
let obj2 = {
  "-3": "great grandfather",
  "-2": "grandfather",
  "-1": "father",
  "0": "me!",
  "1": "son",
  "2": "grandson",
  "3": "great grandson",
};
// return "f" === y || "m" === y ? obj1[n] : obj2[n];

  if ("f" === y) {
    return obj1[n];
  } if ("m" === y) {
    return obj2[n]
  }

}
let result13 = generation(1,"m");
console.log(result13);
console.log("test");

// function generation2(x, y) {
//   const elo = {
//     "-3": { m: "great grandfather", f: "great grandmother" },
//     "-2": { m: "grandfather", f: "grandmother" },
//     "-1": { m: "father", f: "mother" },
//     0: { m: "me!", f: "me!" },
//     1: { m: "son", f: "daughter" },
//     2: { m: "grandson", f: "granddaughter" },
//     3: { m: "great grandson", f: "great granddaughter" },
//   };
//   return elo[x][y];
// }

// Check if a string is a title string or not. A title string is one which has all the words in the string start with a upper case letter.


// long solution

function checkTitleLongSolution(title) {
  var splitArray = title.split(" ");
  var arr = [];
  for (var i in splitArray) {
    arr.push(splitArray[i][0]);
  }
  var string = arr.join("");
  var result = true;
  for (var j in string) {
    if (string[j] !== string[j].toUpperCase()) {
      result = false;
    }
  }
  return result;
}

function checkTitleBetter(t) {
  let f = t.split(" ").map((e) => (e[0] == e[0].toUpperCase() ? true : false));
  return !f.includes(false);
}

function checkTitleBetter2(title) {
  return !title
    .split(" ")
    .map((x) => x[0] == x[0].toUpperCase())
    .includes(false);
}

let checkTitle = (t) => t
    .match(/\b\w/g)
    .map((a) => a == a.toUpperCase())
    .pop();

let result21 = checkTitle("A Mind Boggling Achievement");


// working with promises 

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Hello");
//   }, 1000);
// });

// let promise = new Promise((resolve) => setTimeout(() => resolve("hello"), 1));

const fixImport = (s) => {
  let [a, b, c, d] = s.split(" ");
  return `${c} ${d} ${a} ${b}`;
};

let result17 = fixImport("import object from module_name") // "from module_name import object"

function fixImport2(s) {
	let fp = s.slice(s.indexOf("from"));
	let sp = s.slice( 0,s.indexOf(" from"));
  return  `${fp} ${sp}`;}
  

  // function sumOfCubes(num) {
  //   if(num === [] ? 0 : 1);
  //   let totalPow = num.map( x => Math.pow(x,3));
  //   console.log(totalPow);
  //   let sumAll = totalPow.reduce(
  //     (accumulator, current) => accumulator + current
  //   );
  //   console.log(sumAll);
  //   return sumAll
  // }

  // let result19 = sumOfCubes([1, 5, 9]);

  // console.log(result19);

  function sumOfCubes(num) {
    if (num === []) {
      return 0;
    }
    let totalPow = num
      .map((x) => Math.pow(x, 3))
      .reduce((accumulator, current) => accumulator + current,0);
    console.log(totalPow);

    return totalPow;
  }
  let result19 = sumOfCubes([2]);
  console.log(result19);

  // const sumOfCubes = (nums) => nums.map((x) => x * x * x).reduce((a, c) => a + c, 0);

  
  
  function getOnlyEvens(nums) {
    return nums.filter((item, index) => !(item % 2) && !(index % 2));
  }

  // const getOnlyEvens2 = (nums) =>
  //   nums.filter((n, i) => n % 2 === 0 && i % 2 === 0);

  // function getOnlyEvens3(nums) {
  //   let arr = [];
  //   for (var i = 0; i <= nums.length; i += 2)
  //     if (nums[i] % 2 == 0) arr.push(nums[i]);
  //   return arr;
  // }

  let result20 = getOnlyEvens([1, 3, 2, 6, 4, 8]);
  console.log(result20);


  let s = "It was  a dark and stormy night.";
  // let words = s.split(/\W+/).filter(word => word.length >=4) // [ 'dark', 'stormy', 'night' ]
  let words = s.split(/\W+/).filter(word => !word.length) // [ '' ]
  console.log(words);
  // split(/\W+/)  is a regex expression that split a-z or 0-9

 // const sumOfCubes = (nums) => nums.map((x) => x * x * x).reduce((a, c) => a + c, 0);

function getAverage(arr) {

  let total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  let avg = total / arr.length;
  console.log(avg);

  return avg;

}

  let result22 = getAverage([1, 3]);

// let vals = [2,4,5,6,7,8]

// let newArrVals = vals.map( x => x *2)
// console.log(newArrVals);

function isAvgWhole(arr) {
  return Number.isInteger(arr.reduce((accum, val) => accum + val) / arr.length);
}

let result23 =isAvgWhole([1, 2, 3, 4]); 
console.log(result23);

//Create a function that takes a string of name and checks how much good is the given name. 
// A preloaded dictionary of alphabet scores is available in the Code tab. 
//Add up the letters of your name to get the total score

const scores = {
  A: 100,
  B: 14,
  C: 9,
  D: 28,
  E: 145,
  F: 12,
  G: 3,
  H: 10,
  I: 200,
  J: 100,
  K: 114,
  L: 100,
  M: 25,
  N: 450,
  O: 80,
  P: 2,
  Q: 12,
  R: 400,
  S: 113,
  T: 405,
  U: 11,
  V: 10,
  W: 10,
  X: 3,
  Y: 210,
  Z: 23,
};

const nameScore = (name) => {
  const score = [...name].reduce((a, b) => a + scores[b] || 0, 0);
  if (score >= 600) return "THE BEST";
  else if (score >= 301) return "VERY GOOD";
  else if (score >= 61) return "PRETTY GOOD";
  else return "NOT TOO GOOD";
};


// Recursive fn 

function repetition(txt, n) {
   if (n > 0) return txt.repeat(n);
   else return "";
}

let result24 = repetition("ab", 3);
console.log(result24);


// short array by length

function sortByLength(arr) {
let newSortItems = arr.sort((a, b) => a.length - b.length);
return newSortItems;
}

let resultSort = sortByLength(["Google", "Apple", "Microsoft"]);
console.log(resultSort);


// const sortByLengthES6 = (arr) => arr.sort((a, b) => a.length - b.length);

// function sortByLengthOldandSlowSolution(array) {
//   for (var i = 0; i < array.length; i++) {
//     for (var j = 0; j < array.length - i - 1; j++) {
//       var temp = array[j];
//       if (array[j].length > array[j + 1].length) {
//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//       }
//     }
//   }
//   return array;
// }


// Formats a number using fixed-point notation. toFixed()
//Parses a string argument and returns a floating point number. 
function myPi(n) {
  return Number(Math.PI.toFixed(n));
}


// const myPi2 = (n) => +Math.PI.toFixed(n);
// function myPi3(n) {
//   return parseFloat(Math.PI.toFixed(n));
// }


function highestDigit(number) {
  let nums = number.toString().split("")

  let mappedNum = Math.max.apply(null, nums);
  
  return mappedNum;

}

let resultHigestDigit = highestDigit(379);
// console.log(resultHigestDigit);


// function highestDigit2(number) {
//   let a = number.toString().split("");
//   return Math.max(...a);
// }