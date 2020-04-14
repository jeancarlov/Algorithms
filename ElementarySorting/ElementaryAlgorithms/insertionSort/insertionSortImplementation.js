
// Insertion Sort Pseudeocode: Builds up the sort by gradually creating a larger left sorted portion 


// Start by picking the second element in the array 
// Compare the second element with the one before it and swap if necessary.
// Continue to the next element and if is in the incorrect order, 
// Iterate through the sorted portion( left side) to place the element in the correct place


// check a bug in line 19 
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        for (let j =i - 1; j >= 0 && arr[j] > currentVal; j--) {
            // const element = arr[j];
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentVal;
        // console.log(arr);
    }
    return arr;
}

 let result = insertionSort([ 2, 1, 76, 4])

 console.log(result);
 