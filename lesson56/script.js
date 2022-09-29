
// const obj = { // inside object we have strings and symbols
//     name: "Test",
//     [Symbol("id")]: 1,
//     getId: function() {
//         return this[id];
//     }
// }

// // let id = Symbol("id");// or without "id" inside
// // obj[id] = 1; // symbols are always unique 

// console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);//  for connections and work with data in symbol

// for(let value in obj) console.log(value);


const myAwesomeDB = {
    movies: [],
    actors: [],
    [Symbol.for("id")]: 123 // allready not unique
}

// less code of another lab



myAwesomeDB.id = "123456789";


console.log(myAwesomeDB[Symbol.for('id')]); //global register of symbols \\Symbol.for('content')//
console.log(myAwesomeDB);