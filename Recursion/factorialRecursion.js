// Basic intro to recursion with factorials


// Without recursion 
function factorial(num) {
    let total = 1; 
    for (let i = num; i > 1; i--) {
        total *= i
    }
    return total
}

let result = factorial(4);

console.log(result); // 24 

// With recursion 

// keep the base and the different input in mind for the success of the recursive algorithm
function factorialRecursion(num1) {
    if (num1 === 1) {
        return 1;
    }
    return num1 * factorialRecursion(num1 -1);
}

let recursionTotal = factorialRecursion(2);
console.log(recursionTotal); //2

// short efficient version 

function shortFactorialRecursion( num2) {
    if(num2 === 1) return 1; // base  this will stop the function ones it reach 1  
    //if the return 1 is taking off then the function will go never ending the return is the break
    return num2 * shortFactorialRecursion(num2 -1) // different input
}

let shortRecursionTotal = shortFactorialRecursion(3);
console.log(shortRecursionTotal);//6
