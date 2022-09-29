const birthday2  = Symbol('birthday2');

const user = {
    name: 'Alex',
    surname: 'Smith',
    //birthday: '28/04/1993',
    [birthday2]: '22/22/2222',
    showMyPublicData: function () {
        console.log(`${this.name} ${this.surname}`);
    }
}
// Object.defineProperty(user, 'birthday', {value: prompt ("Date?"), enumerable:true, configurable: true});// only for reading


 //console.log(Object.getOwnPropertyDescriptor(Math,`PI`));

Object.defineProperty(user, 'showMyPublicData', { enumerable: false} )

for (let key in user){
    console.log(key);
    console.log(Object.getOwnPropertyDescriptor(user, birthday2));
}


Object.defineProperties(user,{
    name: {writable:false},
    surname: {writable:false}
})
//Object.defineProperty(user, 'name', {writable: false});// true when created inside project
// Object.defineProperty(user, 'gender', {value: 'male'});// false
// console.log(Object.getOwnPropertyDescriptor(user, 'gender'));

//writable
//enumerable
//configurable 