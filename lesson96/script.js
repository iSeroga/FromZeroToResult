'use strict'

// new RegExp("pattern", 'flags');
// /pattern/f

// const ans = prompt("Подайте ваше chislo");

//  const reg = /\d/; // можна використовувати одразу три т=прапори
//  console.log(ans.match(reg));

 const str ="my name R2D2"
 console.log(str.match(/\w\d\w\d/i));
// \W покуш не букв
// \D пошук не цифр

//\d numbers search
// \w all words and letters
// \s all space (probel)
 
//  i три прапори цей значить щось знайти незалежно від регістру
//  g для глобального пошуку
//  m багато строковий


//  console.log(ans.search(reg));
//  console.log(ans.match(reg)); // массив з інфою. 

// const pass = prompt("password:");
// console.log(pass.replace(/./g, "* ")); // \.(екранування) . Це вибір всіх елементів
// console.log("12-34-56".replace(/-/g, ':'));
