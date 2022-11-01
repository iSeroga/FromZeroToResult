'use strict';
// localStorage.setItem('number', 5);
// localStorage.removeItem('number');
// localStorage.clear();
// localStorage.getItem('number');


const checkbox = document.querySelector('#checkbox'),
        form =  document.querySelector('form'),
        change =  document.querySelector('#color');

if(localStorage.getItem('isChecked')){
        checkbox.checked = true;
};

if (localStorage.getItem('bg') === 'changed') {
    form.style.backgroundColor = 'red';
    
};
checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});


change.addEventListener('click', () =>{
    if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg')
        form.style.backgroundColor = '#fff';
        
    } else {
            localStorage.setItem('bg', 'changed')
            form.style.backgroundColor = 'red';
    };
});

const persone = {
    name: 'Alex',
    age: 25
};

const serializedPerson = JSON.stringify(persone);
localStorage.setItem('alex', serializedPerson);

console.log(JSON.parse(localStorage.getItem('alex')));


 