'use strict';
const inputUah = document.querySelector('#uah'),
      inputUsd = document.querySelector('#usd');

inputUah.addEventListener('input', () => {
    const request = new XMLHttpRequest(); // Шаблонізований конструктор що створює новий об'єкт

   // request.open(method, url, async, login, password);// Збирає налаштування для майбутнього запросу
   request.open('GET', 'js/current.json');
   request.setRequestHeader('Content-type', 'aplication/json; charset=utf-8');
   request.send();

    // request.addEventListener('readystatechange', () => {
        request.addEventListener('load', () => {
        // if(request.readyState === 4 && request.status === 200){
           if( request.status === 200) {
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputUah.value / data.current.usd).toFixed(2);
        }else{
             inputUsd.value = "Something go wrong";
        }
    });

   //status - status of request (404; 000; 200;)
   //statusText - responce from server 
   //responce - otwet 
   // readyState- теперешній стан запросу 



    
});