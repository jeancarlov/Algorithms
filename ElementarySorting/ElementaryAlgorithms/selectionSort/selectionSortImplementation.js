// Similar to bubble sort but in this case this algorithm is seeking the smallest to order at the beginning

// When to do insertion? to reduce the amount of swaping

function selectionSortImplementation(arr) {
    for (let i = 0; i < arr.length; i++) {
        // const element = array[i];
        let lowest = i; 
        for (let j = i+1; j < arr.length; j++) {
            // const element = array[j];
            // console.log(i,j);
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        //Swap
        // console.log('---------');
        // console.log(arr);
        // console.log('swapping to');
        if( i !== lowest){
            console.log(i, lowest);

            let tmp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = tmp;
            console.log(arr);
            // console.log('---------');

        }
       
    }
    return arr;
}

let selectionSortTotal= selectionSortImplementation([0, 2, 34, 22, 10, 19,17])