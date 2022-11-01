//1// function showThis(a, b) {
//     console.log(this);
//     function sum(){
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(4, 5);

//2// const obj = {
//     a: 20,
//     b:15,
//     sum: function() {
//             function shout(){
//                 console.log(this);
//             }
//         shout();
//     }
// };
// obj.sum();

//3// function User (name, id) {
//     this.name = name,
//     this.id = id,
//     this.human = true;
//     this.hello = function() {
//         console.log()
//     }
// }
// let ivan = new User ('Ivan', 28);

//4
// function sayName(surname){
//         console.log(this);
//         console.log(this.name);
// }

// const user = {
//     name: "John"
// }

// sayName.call(user, "smith");// same content 
// sayName.apply(user, ['smith']); //same content

// function count(num) {
//     return this*num;
// }

// const double = count.bind(2); // often

// console.log(double(3));

//1) Common function this === window
// but with "use strict" will be undefind
//2) Контекст у методів об'єкта -сам об'єкт.
//3) This В конструкторах та класах це новий екземпляр об'єкта
//4 ручна прив'язка THis : call, apply, bind.

const btn = document.querySelector('button'); // Кнопки немає але для прикладу код перепишиу

btn.addEventListener('click', function() { // Function =  "() =>" Стрілочній функції
    console.log(this); // будемо отримувати саму кнопку у консоль
    this.style.backgroundColor = "red";
});

const obj = {
    num:5,
    sayNumber: function(){
        const say = () => {
            console.log(this); // Зсилається на Obj  В косолі буде  {num: 5, sayNumber: f}
            console.log(this.num);
        }
        say();
    }
};

obj.sayNumber();

const double = (a) => {
    return a * 2;
};

const double2 = (a) => a * 2;

const double3 = a => a * 2; 

const double4 = (a, b) => a * b;