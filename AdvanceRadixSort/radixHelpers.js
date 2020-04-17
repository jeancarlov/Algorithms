
// getDigit returns the digit in num at the given place value. 
function getDigit(num, i ) {
    return Math.floor(Math.abs(num)/ Math.pow(10, i)) % 10;
}

let result = getDigit(7323, 2);
console.log(result);  // 3 is the remainder 

// Helper for how many digits are in a number
// digitCount for a single number ,
// mostDigits by using digitcount to find the largest amount of digits from the entire list 

function digitCount(num) {
    // if (num === 0) {
    //     return 1;
    // } else{
    //     return Math.floor(Math.log10(Math.abs(num)))+1;
    // }

    //Short syntax
    if (num === 0) return 1;  // special case if num is 0 then be 1
    return Math.floor(Math.log10(Math.abs(num))) + 1;

}

digitCount(423); //3

// mostDigits  given an array of numbers, returns the number of digits in the largest numbers in the list

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
         maxDigits =  Math.max(maxDigits, digitCount(num[i]));
    }
    return maxDigits;
}




