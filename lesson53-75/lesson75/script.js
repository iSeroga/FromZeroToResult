//conspect




//end conspect

// const num = new Function(3);
// console.log(num);

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function(){
        console.log(`hello ${this.name}`);
    };

}; // Function Конструктор

User.prototype.exit = function() {
    console.log(`User ${this.name} exit`);
};

const petro = new User('Petro', 20); // Створюємо об'єкт 
const alex = new User('alex', 30);

petro.exit();

petro.hello();
alex.hello();




console.log(petro);
console.log(alex);