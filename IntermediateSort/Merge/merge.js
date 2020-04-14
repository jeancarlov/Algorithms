
// Write a functions to merge to sorted arrays 
// assume arrays are sorted and return the combination of the arrays

// Pseudo code
// -Create an empty array, take a look at the smallest values in each input array
// -If the value in the first array is smaller than the value in the second array, push the value 
// In the first array into our results and move on to the next value in the first array.
//- If the value in the first array is larger than the value in the second array,
// Push the value in the second array into our results and move on to the next value in the second array.


  
function merge(arr1, arr2) {

    let combination= [];
    let i= 0 ;
    let j= 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            combination.push(arr1[i]);
            i++;
        }else{
            combination.push(arr2[j]);
            j++;
        }
    }
    while (i< arr1.length) {
        combination.push(arr1[i])
        i++;
    }
    while (j< arr2.length) {
        combination.push(arr2[j])
        j++;
    }
    return combination;
}
let total =merge([1,10,50],[2,14,99,100]);

console.log(total); // [ 1, 2, 10, 14, 50, 99, 100 ]



