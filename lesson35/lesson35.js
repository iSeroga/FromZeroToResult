// let a = 5,
//     b = a;
// b = b + 5;
// console.log(b);
// console.log(a);

// const obj ={
//     a:5,
//     b:1
// };
// const copy = obj; // link to already created object
// copy.a = 10;
// console.log(copy);
// console.log(obj);

function copy(mainObj){
    let objCopy = {};

    let key;
    for (key in mainObj){
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}
const numbers = {
    a:2,
    b:5,
    c: {
        x:7,
        y:4
        }
};
 const newNumbers = copy(numbers);
 newNumbers.a = 10;
 newNumbers.c.x = 10;
 console.log(newNumbers);
 console.log(numbers);
 
 const add ={
    d:17,
    e:20
 };
//console.log(Object.assign({}, add)); // незалежна поверхнева копія двух об'єктів

const clone = Object.assign({}, add); // ПОверхнева копія. 
clone.d = 20;
// console.log(add);
// console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();
newArray [1] = 'asasdmak';
console.log(newArray);
console.log(oldArray);
const video = ['youtube', 'viveo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [ ...video,...blogs, 'vk', 'facebook'];
      console.log(internet);


      function log(a,b,c){ // підставляти в функцію числа з масиву
        console.log(a);
        console.log(b);
        console.log(c);
      }
      const num =[2,5,7];
      log(...num); /// використовуємо спредоператор (...) Допомагає потосувать

const array = ["a","b"];
const newaArray = [...array];

const q = {
    one: 1 ,
    two: 2
};
const newObj = {...q};

console.log(newObj);

// PRACTICUM ........................................................
const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
 showAgeAndLangs: function(plan) {
    const {age} = plan;
    const {languages} = plan.skills;
    let str = `Мені ${age}, я володію мовами: `;

    languages.forEach(function(lang){
        str += `${lang.toUpperCase()} `;
    });
    return str;
 }   
};
 console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter)); // бути більш уважним до деталей
// function showExperience(plan) {
// const {exp} = plan.skills;
// return exp;
// }
// console.log(showExperience(personalPlanPeter));  // Головна проблема виникла в деструктирізації.
// І забув дудати строку на якій пишу комент. Тепер все стало нас свої місця.

// function showProgrammingLangs(plan) {
//     let str = '';
//     const {programmingLangs} = plan.skills;
//     for (let key in programmingLangs){
//         str += `Мова ${key} вивчена на ${programmingLangs[key]}\n`
//     }
//     return str;
// }

// console.log(showProgrammingLangs(personalPlanPeter));   Повторити ключі з ними повна лажа

// second Part of task

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = ``;
    
    arr.length === 0 ? str = "Сім'я пуста" : str = " Сім'я складається з:" /// аргумент (якщо так то) ? відповідь на аргумент : (інакше)  другий варіант відповіді

    arr.forEach(member =>{ // Лінійна функція
        str += `${member}`;
    });
    return str;
}
console.log(showFamily(family));



const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach( city =>{
        console.log(city.toLowerCase());
    });
}
console.log(standardizeStrings(favoriteCities));




const someString = 'This is some strange string';

function reverse(str) {
    if (typeof str != 'string'){
        return 'oshybka!';
    }

    return str.split('').reverse().join('');

}
console.log(reverse(someString));

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

    arr.forEach(function(curr, i) {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    });

    // Или
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === missingCurr) {
    //         continue;
    //     }
    //     str += `${arr[i]}\n`;
    // }

    return str;
}

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));
