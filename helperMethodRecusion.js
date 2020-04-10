//Helper method recursion has two functions one in and one out

function collectOddVal(arr) {
    let result = [];
    
    function helper(helperInput) {
        if (helperInput.length === 0) {
            return; // If equals 0 then stop 
        }
        if (helperInput [0] % 2 !== 0) { // if is not even then push an event to result
             result.push(helperInput[0])
        }
        helper(helperInput.slice(1)) // We call the array with a sub array again without excluded odd number
    }
    helper(arr)
    return result;
}

let result = collectOddVal([ 1,2,3,4,5,6,7,8,9])

console.log(result);
