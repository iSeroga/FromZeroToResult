 let str = 'some'; // примітив ип данних
 let strObj = new String(str); // Не найкращий спосіб стрворювати



// console.log(typeof(str));
// console.log(typeof(strObj));// 
// Суть: Обєктна орієнтація 

console.dir([1,2,3]);


const soldier = {
    health:400,
    armour: 100,
    sayHello:function() {
        console.log("Hello");
    }
};

const John = Object.create(soldier); // СТворюємо обєкт джон який портативно наслідується від солджер


// const John ={
//     health:100 
// };



//Старий формат, не використовувати
// John.__proto__ = soldier; //цій

 Object.setPrototypeOf(John, soldier);// Ця команда відповідає 

// console.log(John.armour);
John.sayHello();// Цей обєкт завдяки прото міг використовуати всі вкладені функції і властивості  з іншого обєкту. Зараз не використовується.
