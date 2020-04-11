
// Binary search is a much faster form of search 
//	• Rather than eliminating one element at a time ,
// You can eliminate half of the remaining elements at time.
// Binary Search only works in sorted arrays

// Pseudocode
// 1. Write a function that accepts a sorted array value.
// 2.Create two variables that will point to the left pointer at the start of the array 
// Create a right pointer to the end of the array 
//  loop While the left pointer comes before the right pointer and the pick th middle 
// loop to check if the element is equal to the middle 
// if target value is found then return index
// if target value is too small , move the left pointer up
// if target value is too large, move the right pointer down 
// if value is never found then return -1 


// function BinarySearch(arr, val1, val2) {
    
//     if (condition) {
        
//     }
//     if (condition) {
        
//     } else {
//         returnt -1;
//     }
// }



// BinarySearch([[1, 2, 3, 4, 5, 6, 7, 8, 9]])

// Keep in mind that a while loop needs to have a break point that will prevent from going undefined
// while loop break point  arr[middle] !== val1 && start <= end 


function BinarySearch(arr, val1) {
    let start = 0;
    let end = arr.length -1;
    let middle = Math.floor((start + end) / 2);
    // console.log(start, middle , end);
    
    while (arr[middle] !== val1 && start <= end ) {
        
        if (val1 < arr.middle) {
            end = middle -1
        } else{
            start = middle + 1; 
        }
        middle = Math.floor((start + end) / 2);
    }
    // console.log(start, middle, end);
    if (arr[middle] === val1 ) {
        return middle;
    }
    
    console.log(middle);
    
}



// BinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)

BinarySearch([ 2, 5, 6, 9, 13, 15, 28, 30], 15); // 0, 3, 7

//[ 2, 5, 6, 9, 13, 15, 28, 30]
//  S        M              E

//[ 2, 5, 6, 9, 13, 15, 28, 30]
//              S   M       E


// SHORT VERSION 

function BinarySearch(arr, val1) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    while (arr[middle] !== val1 && start <= end) {
        if (val1 < arr.middle) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === val1 ? middle : -1;
}


// LINEAR IS GREAT FOR UNSORTED ARRAY