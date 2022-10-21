'use strict';

const person = {
    name: "alex",
    tel: "+744444444",
    parents: {
        mom:'Olga',
        dad: "mike"
    }
};

console.log(JSON.stringify(person));

const clone = JSON.parse(JSON.stringify(person)); // Глибокий клон обєктів.

clone.parents.mom = "ann";

console.log(person);
console.log(clone);


