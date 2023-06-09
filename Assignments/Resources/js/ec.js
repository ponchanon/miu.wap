// // Exercise 01
// function b() {
//     const y = 30;
//     a();
//     function a() {
//         console.log(x, y);
//     }
//     var x = 10;
//     console.log(x, y);
// }
// const x = 20;
// var y = 40;
// b();

// Exercise 02
function foo(x) {
    let m;
    console.log(x, y);
    if (x > 5) {
        var y = 5;
        m = x + y;
    } else {
        let z = 10;
        m = z;
    }
    x = m;
    console.log(x, y);
}
var x = 10;
foo(3);
console.log(x);


// Exercise 03

// function printNumbers(from, to) {
//     let start = from;
//     console.log(`Printing from ${from} to ${to}`);
//     const intervalId = setInterval(() => {
//         console.log(start++);
//         if (start > to) {
//             //start=from; //this will help for continuous run 
//             clearInterval(intervalId);
//         }
//     }, 1000);
// }
// // Calling the function to test the program
// printNumbers(25, 33);