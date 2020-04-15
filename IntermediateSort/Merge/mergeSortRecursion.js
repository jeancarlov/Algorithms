// merge Sort Recursion Pseudocode  02

// - Break up the array into halves until you have arrays that are empty or have one element
// - Once I have smaller sorted arrays, merge those arrays with other sorted arrays until 
// I am back at the full length of the array 
// Once the array has been merge back together, return the merged (and sorted!)array 

function merge(arr1, arr2) {

    let combination = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            combination.push(arr1[i]);
            i++;
        } else {
            combination.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        combination.push(arr1[i])
        i++;
    }
    while (j < arr2.length) {
        combination.push(arr2[j])
        j++;
    }
    return combination;
}
// let total = merge([1, 10, 50], [2, 14, 99, 100]);

 function mergeSort(arr) {
     
    if (arr.length <= 1) return arr; // base  due to recursion 
        let mid = Math.floor(arr.length/2);
        let left = mergeSort(arr.slice(0, mid));
        let right = mergeSort(arr.slice(mid));
        return merge(left, right) // join them back with merge function that takes two array parameters 
 }

 let totalCombination = mergeSort([ 10, 24, 76, 73])
console.log(totalCombination);[10, 24, 73, 76]
 
 