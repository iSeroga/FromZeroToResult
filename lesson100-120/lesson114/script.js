'use strict'


// console.log(1);

// setTimeout(()=> {
//     console.log('timeout')
// }, 2000);

// setTimeout(()=> {
//     console.log('timeout_4000')
// }, 4000);

// console.log(2);

/////////////////////////////////////////
let k = 1
function count () {
    for (let i = 0; i < 1e9; i++) {
        k++;
    }
    alert('done');
}
count();

setTimeout( () =>{
    console.log(1);
}, 0)
console.log (2);