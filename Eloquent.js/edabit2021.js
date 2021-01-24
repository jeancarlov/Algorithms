
function doubleChar(str) {
let originalStr = str.split("");
// console.log(originalStr);
let repeatStr = str.repeat(2).split("");
// console.log(repeatStr);

let mapped = originalStr.map((x) => x + x).join('');
// console.log(mapped);

return mapped

}

let result1= doubleChar("String") // SSttrriinngg
console.log(result1);

let doubleChar2 = (str) => str.replace(/./g, "$&$&");


// function emotify(str) {

//     let newStr = str.replace(/smile/g, ":D");
//     return newStr
// }

// let result2 = emotify("Make me smile");
// console.log(result2);

function emotify(str) {
	str = str.replace(/smile/g, ':D');
	str = str.replace(/grin/g, ':)');
	str = str.replace(/sad/g, ':(');
	str = str.replace(/mad/g, ':P');
	
	return str;
}

let result3 = emotify("Make me mad");
console.log(result3);

// function emotify2(str) {
//   return str
//     .replace("smile", ":D")
//     .replace("grin", ":)")
//     .replace("sad", ":(")
//     .replace("mad", ":P");
// }


function orderArrsSorting(arr1, arr2) {
let newSum= [...arr1,...arr2]
console.log(newSum);
let newSort = newSum.sort((a, b) => a - b);
console.log(newSort);


}

let result4 = orderArrsSorting([1, 2, 3, 4], [0, 6]);


function canNest(arr1, arr2) {
  return (
    Math.min(...arr1) > Math.min(...arr2) &&
    Math.max(...arr1) < Math.max(...arr2)
  );
}
let result05 = canNest([1, 2, 3, 4], [0, 6]);
console.log(result05);


function sortByLength(arr) {

let test1 = arr.sort((a, b) => a.length - b.length);
return test1;

}

let result6= sortByLength(["a", "ccc", "dddd", "bb"]) 
console.log(result6);


function seriesResistance(arr) {
 let totalSum = arr.reduce((a, b) => a + b, 0)
 if (totalSum > 1) {
     return `${totalSum} ohms`;
 } 
 if (totalSum <= 1) {
     return `${totalSum} ohm`;
 } 
 };


let finalResult = seriesResistance([1, 5, 6, 3]);
console.log(finalResult);


// const seriesResistance2 = (arr) => (
//   (rt = arr.reduce((acc, curr) => acc + curr, 0)),
//   `${rt} ${rt > 1 ? "ohms" : "ohm"}`
// );

// class OnesThreesNines {
//   constructor(n) {
//     this.ones = Math.floor(n / 1);
//     this.threes = Math.floor(n / 3);
//     this.nines = Math.floor(n / 9);
//   }
// }

function add(x) {
    return totalSum
function totalSum(y) {
    let newValue = x + y;
    return newValue
}    

}

let result06 = add(-30)(80);
console.log(result06);

// const add = (num1) => (num2) => num1 + num2;


const singleOccurrence = (str) => (
  (str = str.toUpperCase()),
  str.length === 0
    ? ""
    : [...str].filter((x) => str.indexOf(x) === str.lastIndexOf(x))[0]
);

let result07 = singleOccurrence("EFFEAABbc");
console.log(result07);

// function singleOccurrence1(str) {
//   str = str.toUpperCase();
//   if (str == "") {
//     return str;
//   }
//   for (i = 0; i < str.length; i++) {
//     if (str.indexOf(str.charAt(i)) == str.lastIndexOf(str.charAt(i))) {
//       return str.charAt(i);
//     }
//   }
// }


// function singleOccurrence2(str) {
//   let newStr = str.toUpperCase();
//   const array = newStr.split("");
//   if (newStr != "") {
//     for (let i = 0; i < newStr.length; i++) {
//       if (newStr.indexOf(array[i]) === newStr.lastIndexOf(array[i])) {
//         return array[i];
//       }
//     }
//   } else return "";
// }

function simplePair(arr, n) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      var a = arr[i];
      var b = arr[j];
      if (a * b === n) {
        return [a, b];
      }
    }
  }
  return null;
}

// simplePair([1, 2, 3], 3) ➞ [1, 3]

// const simplePair2 = (arr, n) => {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1; j++) {
//       const arr2 =  i === 0 ? arr.slice(1) : arr.slice(0, i).concat(arr.slice(i + 1));
//        
//       if (arr[i] * arr2[j] === n) return [arr[i], arr2[j]];
//     }
//   }
//   return null;
// };

const bitwiseAND = (n1, n2) => n1 & n2;

const bitwiseOR = (n1, n2) => n1 | n2;

const bitwiseXOR = (n1, n2) => n1 ^ n2;

// function bitwiseAND(n1, n2) {
//   n1 = n1.toString(2).split("").reverse();
//   n2 = n2.toString(2).split("").reverse();
//   return parseInt(
//     n1
//       .map((a, i) => (Number(a) + Number(n2[i]) == 2 ? "1" : 0))
//       .reverse()
//       .join(""),
//     2
//   );
// }

// function bitwiseOR(n1, n2) {
//   n1 = n1.toString(2).split("").reverse();
//   n2 = n2.toString(2).split("").reverse();
//   return n1.length >= n2.length
//     ? parseInt(
//         n1
//           .map((a, i) => (Number(a) == 1 || Number(n2[i]) == 1 ? "1" : 0))
//           .reverse()
//           .join(""),
//         2
//       )
//     : parseInt(
//         n2
//           .map((a, i) => (Number(a) == 1 || Number(n1[i]) == 1 ? "1" : 0))
//           .reverse()
//           .join(""),
//         2
//       );
// }

// function bitwiseXOR(n1, n2) {
//   n1 = n1.toString(2).split("").reverse();
//   n2 = n2.toString(2).split("").reverse();
//   return n1.length >= n2.length
//     ? parseInt(
//         n1
//           .map((a, i) =>
//             (Number(a) == 1 || Number(n2[i]) == 1) &&
//             Number(a) + Number(n2[i]) != 2
//               ? "1"
//               : 0
//           )
//           .reverse()
//           .join(""),
//         2
//       )
//     : parseInt(
//         n2
//           .map((a, i) =>
//             (Number(a) == 1 || Number(n1[i]) == 1) &&
//             Number(a) + Number(n1[i]) != 2
//               ? "1"
//               : 0
//           )
//           .reverse()
//           .join(""),
//         2
//       );
// }










