
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
return test1
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


const seriesResistance2 = (arr) => (
  (rt = arr.reduce((acc, curr) => acc + curr, 0)),
  `${rt} ${rt > 1 ? "ohms" : "ohm"}`
);