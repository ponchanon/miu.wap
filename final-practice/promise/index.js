console.log('start');
const result = new Promise((reject, resolve) => {
    console.log(1);
    setTimeout(() => reject('Whoops!'), 1000);
    console.log(2);
})
.then(res => console.log(res))
.catch(error => console.log('Error Happens'));
console.log(result);
console.log('end');