
// Naive solution 
// Potential problems with this method:
// 1. It keeps running 
// 2. It takes time and size in making needless comparetions

// function bubbleSortNaive(arr) {
//     for (let i = 0; i < arr.length; i++) {
//        for (let j = 0; j < arr.length; j++) {
//            if (arr[j] > arr[j+1]) {
//                //Swap
//                let tmp = arr[i];
//                arr[j] = arr[j+1];
//                arr[j+1] = tmp;
//            }
//        }    
//     }
//     return arr
// }
// bubbleSortNaive([ 37,45,29,8])
// let result = bubbleSortNaive([37, 45, 29, 8]);
// console.log(result); // [ 8, 29, 29, 37 ]


function bubbleSortImprovement(arr) {
    for (let i = arr.length; i > 0; i--) {
       for (let j = 0; j < i -1; j++) {
        //    console.log(arr, arr[j], arr[j + 1]);
           if (arr[j] > arr[j+1]) {
               //Swap
               let tmp = arr[j];
               arr[j] = arr[j+1];
               arr[j+1] = tmp;
           }
       }    
    }
    return arr
}
// bubbleSortNaive([ 37,45,29,8])
let result = bubbleSortImprovement([37, 45, 29, 8]);
console.log(result); // [ 8, 29, 29, 37 ]


function bubbleSortEnhance(arr) {
    for (let i = arr.length; i > 0; i--) {
       for (let j = 0; j < i -1; j++) {
        //    console.log(arr, arr[j], arr[j + 1]);
           if (arr[j] > arr[j+1]) {
               //Swap
               let tmp = arr[j];
               arr[j] = arr[j+1];
               arr[j+1] = tmp;
           }
       }    
    }
    return arr
}
// bubbleSortNaive([ 37,45,29,8])
let result = bubbleSortImprovement([37, 45, 29, 8]);
console.log(result); // [ 8, 29, 29, 37 ]




