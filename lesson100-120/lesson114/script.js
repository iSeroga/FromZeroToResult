// const compose = 
//     (...fns) => {
//         (x) => {
//             fns.reduceRight((res, fn) => fn(res),x)
//         }
//     };


const add1 = function(a){return a + 1}
const addAll3 = function(a,b,c){return a + b + c}

const composeWithArgs = (...fns) => fns.reduceRight((f,g) => (...args) => g(f(...args)));

console.log(composeWithArgs(add1,addAll3)(1,2,3));