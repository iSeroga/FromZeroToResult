

const obj = { // inside object we have strings and symbols
    name: "Test",
    [Symbol("id")]: 1,
    getId: function() {
        return this[id];
    }
}

// let id = Symbol("id");// or without "id" inside
// obj[id] = 1; // symbols are always unique 

console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);// 

for(let value in obj) console.log(value);