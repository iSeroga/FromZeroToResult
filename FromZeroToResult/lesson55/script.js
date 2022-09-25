'use strict';

const boxQuery = document.querySelectorAll('.box');
const boxGet = document.getElementsByClassName('box');

boxQuery.forEach(box => {
    if(box.matches('.this')) console.log(box);
})

console.log(boxQuery[0].closest('.wrapper'));
// boxQuery[0].remove();
// boxGet[0].remove();

// for(let i = 0; i < 5; i++){
//     const div = document.createElement('div');
//     div.classList.add('box');
//     document.body.append('div');
// }

//  console.log(boxQuery);

//  console.log(boxGet);

//  //console.log(document.body.children);
//  console.log(Array.from(boxGet));//From html collection to common massive (get data once and not dynamic)