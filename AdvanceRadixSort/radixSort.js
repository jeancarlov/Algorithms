
// Radix Sort Pseudocode:
// Define a function that accepts list of numbers 
// Figure out how many digits the largest number has 
// Loop from k = 0 up to this largest number of digits
// For each iteration of the loop:
    // Crete buckets for each digit (0 -9)
    // Place each number in the corresponding bucket based on its kth digits


// Helper functions
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

// Radix function 
function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);
    console.log(maxDigitCount);
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => []);  // length of 10 empty sub arrays 
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        console.log(digitBuckets); // start from index 0 from the right 
        nums = [].concat(...digitBuckets);
        console.log(nums);  // put elements in order digit 
    }
    return nums;
}

radixSort([23, 345, 5467, 12, 2345, 9852])


// n - length of array 
// k - number of digits   

//1. all unique randomly distributed data time complexity( average) = O(nk) will becomes O( n log n) due to the way computers store data
// 2. In theory radix sorts seems to be faster than all other previous sorting algorithms but is not fully proven as there is counter arguments






