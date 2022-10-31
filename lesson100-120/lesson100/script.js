'use strict'

class User {
constructor (name, age){
    this.name = name;
    this._age = age;
}
    say() {
        console.log(`user Name: ${this.name}, age: ${this._age} `);
    }
    get age() {
        return this._age;
    }
    set age(age) {
        if(typeof age === 'number'&& age > 0&& age < 130){
            this._age = age;
        }else{
            console.log("Sory but your age is bullshit");
        }
    }
}

const ivan = new User ("Ivan", 27);
console.log(ivan.name);
ivan.age = 99
console.log(ivan.age);

ivan.say();

// home work 
// ПОвторити кож з класами і написати до нього геттери і сеттери ( 2 НЕвеликі методи)