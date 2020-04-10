// With Recursion 
function countDown(num) {
    if (num <= 0) {
        console.log('All done! with recursion ');
        return;
    }
    console.log(num);
    num--;
    countDown(num)

}

countDown(5)

// Without Recursion 

function countDown1(num1) {
    for (let i = num1; i > 0; i--) {
        console.log(i);
    }
    console.log('all done without recursion ');
}

countDown1(10);