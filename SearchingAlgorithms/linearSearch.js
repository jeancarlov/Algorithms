// [ 5, 8, 1, 100, 12, 3, 12,]

// Linear Search Pseudocode
// This function accepts an array and a value 
// Loop through the array and check for a value if is find return the index otherwise return-1

// function linearSearch(arr, val) {
//     let store1 = [];
//     for (let i = 0; i < arr.length; i++) {
//         if( arr === val) {
//         return -1;
//     }
//     else{
//         store1.push(arr[0])
//     } 
        
//     }
   
// }

// let result = linearSearch([5, 8, 1, 100, 12, 3, 12,], 1);

// console.log(result);



function linearSearchArr(arr1, val1) {
    
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === val1 ) {
                return i;
        }        
    }
    return -1;
}

let result1 = linearSearchArr([5, 8, 1, 100, 12, 3, 12,], 12);

console.log(result1); // 5 is the index in the array 

// what is the time complexity? o^n as length of array gets longer then the time as well 



// Linear Search Big O 

