const now = new Date();

// console.log(now.getFullYear());
console.log(now.setHours(18));
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());

let start = new Date();

for (let i = 0; i < 10000; i++){
    let some = i **3;
}

let end = new Date();

//alert (`Cikle worked for ${end- start}`);
console.log(`Cikle worked for ${end- start} miliseconds`);