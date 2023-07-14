console.log('start');
async function foo(){
    console.log(3);
    const result = await new Promise((resolve, reject) => {
        console.log(1);
        resolve("hello");
        console.log(2);
    })
    console.log(result);
    console.log(4);
}
foo();
console.log('end');