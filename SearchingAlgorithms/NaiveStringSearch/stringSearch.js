// Checking for a pattern 

//wowomgzomg
// find omg 

// Pseudo code
// 1. Define a funtion that takes two string
// 2. Create a loop over the shorter string
// 3. Create a loop over the longer string

// 4. if characters dont mactch break out of the inner loop
// 5. If characters do match keep going 
// 6. If inner loop is completed and find a match, then increment the count of matches
// 7. Return the count.

// Long syntax  

 function stringSearch01(long, short) {
      let count = 0;
    for (let i = 0; i < long.length; i++) {
        // const elementL = long[i];
        // console.log(i);
        for (let j = 0; j < short.length; j++) {
            // const elementS = short[j];
            // console.log(long[i], short[j]);
            // console.log(short[i], long[i + j]);
            if (short[j] !== long[i+j]) {
                // console.log('Break!');
                break;
            }
            if (j === short.length - 1) {
                // console.log('found one')
                count++;
            }
        }
    }
    return count;
 }


//   stringSearch01('lorie loled', 'lol') // one match


  //Short syntax


function stringSearch01(long, short) {
    let count = 0;
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            if (short[j] !== long[i + j]) break;          
            if (j === short.length - 1) count++;
        }
    }
    return count;
}

let result = stringSearch01('lorie loled', 'lo')
console.log(result); // two matches
