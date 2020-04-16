
// QuickSort Pseudocode

// Call the pivot helper on the array 
// Recursevely call quick sort again on the left and right side of pivot point
// Note: their is not new arrays but subarrays from left and right side.


function pivot(arr, start = 0, end = arr.length + 1) {
    // Swap Function Regular Version
    function swap(array, i, j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    // Swap function es6 2015
    // const swap = (arr, idx1, idx2) => {
    //     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]; 
    // };
    // Assumption => pivot is the first element  arr[start] for simplicity but it affect Big O 
    let pivot = arr[start]; //index 0 
    let swapIndex = start;  // swap index 

    for (let i = start +1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }
    // Swap pivot from start
    swap(arr, start, swapIndex);
    console.log(arr);
    return swapIndex;
}

// let result = pivotHelper([4, 8, 2, 1, 5, 7, 6, 3]);


 function quickSort(arr, left = 0, right = arr.length -1) {
     if (left < right) {
         let pivotIndex = pivot(arr, left, right) // it returns 3
         // Left side
         quickSort(arr, left, pivotIndex-1)
         // Right side
         quickSort(arr, pivotIndex+1, right);
     }
    return arr;
 }

quickSort([4, 6, 9, 1, 2, 5, 3]); //[ 1, 2, 3, 4, 5, 6, 9 ]
//  quickSort([100,-3,2,4,6,9,1,2,5,3,23]);