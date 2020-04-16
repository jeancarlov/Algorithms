

function pivotHelper(arr, start = 0, end = arr.length+1) {
    // Swap Function
    function swap(array, i, j) {
        let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
    }
     // Assumption => pivot is the first element  arr[start] for simplicity but it affect Big O 
    let pivot = arr[start]; //index 0 
    let swapIndex = start  // swap index 

    for (let i = start; i < arr.length; i++) {
        
        if (pivot > arr[i]) {
            swapIndex++;
            swap(arr, swapIndex, i)
        }     
    }
    // Swap pivot from start
    swap( arr, start, swapIndex);
    console.log(arr);
    
    return swapIndex;
}

let result = pivotHelper([4, 8, 2, 1, 5, 7, 6, 3]);

console.log(result); // 3 is the new pivot since 4 got move to the middle 

// [ 3, 2, 1, 4, 5, 7, 6, 8 ]


//es6 2015 version 

// function pivotHelperVersion2015(arr, start = 0, end = arr.length + 1) {
//     const swap2015 =(arr, idx1, idx2) => {
//         [arr[idx1], arr[idx2]] = [arr [idx2], arr[idx1]];
//     };
    // Assumption => pivot is the first element  arr[start] for simplicity but it affect Big O 
    // let pivot = arr[start]; //index 0 
    // let swapIndex = start  // swap index 

//     for (let i = start; i < arr.length; i++) {
        
//         if (pivot > arr[i]) {
//             swapIndex++;
//             swap(arr, swapIndex, i)
//         }
//     }
    
//     swap(arr, start, swapIndex);
//     console.log(arr);

//     return swapIndex;
// }