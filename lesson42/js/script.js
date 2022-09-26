'use strict';
 const box = document.getElementById('box');
 console.log(box);

 const buttons = document.getElementsByTagName(`button`); // Тут колекція // Якщо тут поставимо квадратні скобки то тут 
 //викликаємо конкретний елемент з колекціі

 console.log(buttons[1]);// Тут викликаєм один конкретний елемент з колекції

 const circles = document.getElementsByClassName(`circle`);

 console.log(circles);

 const hearts = document.querySelectorAll(`.heart`);// css selectors   classes, atributes

 //console.log(hearts);
 hearts.forEach(item =>{
    console.log(item);
 });

 const oneHeart = document.querySelector(`.heart`); // Тільки перший елемент

  console.log(oneHeart);