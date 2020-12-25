function collectOddVal(arr) {
    let newArr  = []; 

    if (arr.length === 0) {
      // it checks if array is empty but is not until odd values are taken ou
      return newArr; // base
    }
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]); // it pushes the odd number to data container
    }
    newArr = newArr.concat(collectOddVal(arr.slice(1))); //new array with out the excluded number
    return newArr; // Makes the array continue until it reaches base 
}

let result = collectOddVal([1,2,3,4,5]);
console.log(result);


