// let user = {
//     name: 'Ivan'
// };

// // const arr = [user]
// // let map = new Map();
// let map = new WeakMap();
//  map.set(user, 'data');

// //weakMap only for objects keys, if no link and exist only  inside weakMao(object) it will be deleted
// user = null;

// // console.log(user);
// // console.log(arr[0]);
// // console.log(map.keys())
// console.log(map.has(user)); 

let cache = new WeakMap();

function cacheUser(user){
    if(!cache.has(user)){
        cache.set(user, Date.now())
    }
    return cache.get(user);
}

let lena ={name: "Elena"};
let alex = {name: "Alex"};

cacheUser(lena);
cacheUser(alex);

lena = null;

console.log(cache.has(lena));//false
console.log(cache.has(alex));//true 

//weakSet 
// add, has, delete   NO: forEach


let messages = [
    {text: "Hello", from: "john"},
    {text: "Hel", from: "jo"},
    {text: "....", from: "ohn"},
    {text: "ponr", from: "bohn"},
    {text: "sun", from: "tohn"},
    {text: "bun", from: "pohn"},
    {text: "toon", from: "rohn"},
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
// readMessages.add(messages[1]);
messages.shift(); // shift is a method of arr (massive) to delete file

console.log(readMessages.has(messages[0]));






