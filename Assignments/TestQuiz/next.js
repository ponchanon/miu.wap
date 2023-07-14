// setImmediate(()=>console.log("Imm"));
// setTimeout(function() {}, 2000);
// setTimeout(()=>console.log("time"));
// setTimeout(function() {}, 2000);
// process.nextTick(()=>console.log("next"));
// setTimeout(function() {}, 2000);


function sum(...numbers) {
    //return numbers.reduce((total, num) => total + num, 0);
    return numbers;
}

console.log(sum(1, 2, 3, 4, 5)); // Output: 15
