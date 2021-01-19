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

let result12 = error(1);


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

