

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '28/04/1993',
    showMyPublicData: function () {
        console.log(`${this.name} ${this.surname}`);
    }
}

// for (const key in user ){
//     console.log(user[key]);
// }

// const arr = ['b', 'a', 'c'];
// Array.prototype.someMethod = function(){ }

// for (const key of arr ){
//     console.log(key);
// }

// console.dir(arr);

// const str = 'string';

// for (const key in str ){
//     console.log(str[key]);
// }// "for (...in...)" not recomended for massiv and strings

const salaries  = {
    john: 500,
    ivan: 1000,
    ann: 5000,
    sayHello: function() {
        console.log('hello')
    }
}

salaries[Symbol.iterator] = function () {// iterator object with method next
    return {
        current: this.john,
        last: this.ann,

        next(){
                if (this.current < this.last){
                     this.current += 500; 
                     return {done:false, value:this.current} // first working second data for increes
                } else {
                    return {done:true}
                }

            // {done: true, value: 123}
        }
    }
}

const iterator = salaries[Symbol.iterator]();
console.log(iterator.next())
// for (let res of salaries) {
//     console.log(res);
// }


//difference between for of and for in // itterators