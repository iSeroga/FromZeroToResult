//1)
console.log(typeof(String(null)));
console.log(typeof(String(4))); // Все прирівнюється до строки


//2)
console.log(typeof(null + 5));// Конкатикація зі строкою робить строку
const num = 5;

console.log("https:insta.com/catalog/"+ num);


const fontSize = 26 + 'px';

//TO NUmber

// 1)
console.log(typeof(Number("4")));

// 2
console.log(typeof(+"5")); // Унарний плюс 


//3)
console.log(typeof(parseInt("15px",10))); 

let answ = +prompt('hello', "");

// To boolean

//1)

// 0, '', null, undefined, NaN; //always falls

let switcher = nu ll;
    if (switcher){
        console.log('working...');
    }
    switcher = 1;
    if (switcher){
        console.log('working...');
    }
 

// 2)
console.log(typeof(Boolean('5')));

//3)
console.log(typeof(!!'5'));


