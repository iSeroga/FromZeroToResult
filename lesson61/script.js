
// const bigint = 65156116165646494949561516165161616662161612621n;// string

const sameBigInt = BigInt(65156116165646494949561516165161616662161612621);// type Number

// console.log(5n / 2n); // if we will "/" number in bigInt it will return round number "5/2=2"

console.log(2n === 2);

let bigint = 1n;
let number = 2;

console.log(bigint + BigInt(number));
console.log(Number(bigint) + number); // max number is fixed. All what not fit will cuted. 
// console.log(+bigint + number); // will error
// use BigInt only when you real need it!