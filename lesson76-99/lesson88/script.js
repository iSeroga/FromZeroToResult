'use strict'

// .ForEach() Метод для перебора масива. 
// Ніколи не повертає новий масив, просто бере масив і перебирає.


// filter 

// const names = ['ivan', 'petro', 'John', 'voldemar'];

// const shortNames = names.filter(function (name) {
//      return name.length < 5;
// });

// console.log(shortNames);

// map() // початковий массив та змінити кожен елемент в ньому

// const answers = ['Ivan', 'PET', 'asdsa', 'hello'];
// let answers2 = ['Ivan', 'PET', 'asdsa', 'hello'];

// const result = answers.map(item => { // Стрілкова функція
//     return item.toLocaleLowerCase();
// } )

// answers2 = answers2.map(item => item.toLocaleLowerCase()); // ТАк не радять робити( перезаписувати первичний масив)

// console.log(result);
// console.log(answers2);

///////////////////////////////////////////// every/some ()////////////////////////////////////////////  buling (true false)

// const some = [4, 'sada', 546, 'asdawq'];

// console.log(some.some(item => typeof(item) === "number")); // якщо нічого не підставляти то return  є автоматично ( в цьому випадку уявляємо що він тут є)

// console.log(some.every(item => typeof(item) === "number"));// True Тільки в тому випадку якщо всі айтеми  в масиві будуть цифрами


/////////////////////////////////////////////// reduce() /////// збирати масив в одне ціле

// const arr = [4,5, 1, 3 ,2, 6];

// // В reduce  вда аргументи автоматично

// const res = arr.reduce((sum, current) => sum + current, 3 ); // 3 Початкове значення 

// console.log(res);

// const arr = ['apple','bear','fruit','mango','pennisss',];

// // В reduce  вда аргументи автоматично

// const res = arr.reduce((sum, current) => `${sum}, ${current}` );

// console.log(res);


const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] ==='persone')
.map(item => item[0]);

console.log(newArr);
