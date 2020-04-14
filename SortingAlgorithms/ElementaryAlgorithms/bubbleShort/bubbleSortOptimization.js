function bubbleSortImprovement(arr) {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            //    console.log(arr, arr[j], arr[j + 1]);
            if (arr[j] > arr[j + 1]) {
                //Swap
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr
}
// bubbleSortNaive([ 37,45,29,8])
// let result = bubbleSortImprovement([37, 45, 29, 8]);
// console.log(result); // [ 8, 29, 29, 37 ]


// Optimization  Noswaps;
function bubbleSortOptimization(arr) {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            //    console.log(arr, arr[j], arr[j + 1]);
            if (arr[j] > arr[j + 1]) {
                //Swap
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
                noSwaps = false;
            }
        }
        if(noSwaps) break; 
    }
    return arr
}
// bubbleSortNaive([ 37,45,29,8])
let total = bubbleSortOptimization([37, 45, 29, 8]);
console.log(total); // [ 8, 29, 29, 37 ]