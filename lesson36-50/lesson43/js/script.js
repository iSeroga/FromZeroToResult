'use strict';
const  box = document.getElementById('box'),
       btns = document.getElementsByTagName('button'), // Це все псевдо масив
       circles = document.getElementsByClassName('circle'),
       hearts = document.querySelectorAll('.heart'),
       oneHeart = document.querySelector('.heart'),
       wrapper = document.querySelector('.wrapper');// Тут з'явився тому-що часто використовуємо (більше 1 разу)
    //    hearts = wrapper.querySelectorAll('.heart'), // При наявності елементу у об'явлених в псевдо масиві для більшої
    //    oneHeart = wrapper.querySelector('.heart'),  // конкретики можна вкахувати так.
box.style.backgroundColor = 'blue'; // hex or rgb good the same as in css
box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';

//box.style.cssText = `background-color: blue; width: ${num}px`; // Можна підставляти значення від  користувача


btns[1].style.borderRadius = '100%';
// circles.style.backgroundColor = 'red'; // Це не робочий варінт, через те що Js Не розуміє що ми від нього хочемо
circles[1].style.backgroundColor = 'red';// ТУт конкретно вказуємо який елемент хочемо змінити

for ( let i=0; i< hearts.length; i++ ){//НАйпростіший цикл який допоможе автомаично змінювати і перебирати елементи в блоці
    hearts[i].style.backgroundColor = 'blue';// і виступає як [0], [1], [2]
}

hearts.forEach(item =>{ // Спеціальний метод для перебору функції щоб не писати цикл
    item.style.backgroundColor = 'blue';
});

//// Methods /////////

const div = document.createElement('div'); // Це існує тільки в Js Файлі на веб-сторінці його не існує 
const text = document.createTextNode('ТУт був я'); // Часто можна почути не елементи а ноди. цей метод рідко використовується

div.classList.add('black');

document.body.append(div); //Сучасний метод
//document.querySelector('.wrapper').append(div); // У випадку якщо далі по коду нам буде не потрібен цей метод
wrapper.append(div); // append В кінець елементу
wrapper.appendChild(div); // Старіший метод 


wrapper.prepend(div);// НА початок вибраного блоку
hearts[0].before(div);// Аналогічно варіантам з гори

wrapper.insertBefore(div, hearts[0]);// СТарий метод т 1 це елемент який потрібен, 2 це перед яким заміняємо


hearts[0].after(div);// Після першого
circles[0].remove();//Видаляє вибраний елемент 

wrapper.removeChild(hearts[1]); // Працює через Перентс елемента

hearts[0].replaceWith(circles[0]);// Замінити один елемент іншим, при тому що видаляє заміняємий елемент
// ПРи тому прибирає елемент зі свого місця (переставляє з його місця замінюючи на іншому)

wrapper.replaceChild(circles[0],hearts[0]); // аналогічно попередньому по значенню 1) то Обєкт на який змінюємо 2) місце де ставимо

/// Add Html
div.innerHTML = "<h1></h1>Hello World</>"; // можна просто вставляти текст + хтмл СТруктура (додаткові блоки)

div.textContent = "hello"; //Працює лише з текстом 


div.innerHTML = "<h1></h1>Hello World</h1>";

div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>'); // Дозволяє ставити прямо перед елементом

div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>');// спочатку буде цей код і далі основа

div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>');// Одразу після голового елемента

div.insertAdjacentHTML('afterend', '<h2>Hello</h2>'); // має відступ від основного коду і йде нижче по рівню





