// 'use strict'

// console.log('Запрос данних...');

// const req = new Promise(function(resolve, reject){// reject if something wrong

//     setTimeout(() =>{                                   //імітація асинхронного коду
//         console.log("Підготовка данних");
    
//         const product = { // if all ok next ste resolve 
//             name: 'TV',
//             price: 2000
//         };
    

//         resolve(product);
//         // setTimeout(() => {            // Цю частину можна замінити на resolve (переклад: вирішити) // запускажться 
//         //     product.status = 'order';
//         //     console.log(product)
//         // }, 2000);
//     }, 2000);
// });

// req.then((product) => {                // це функція resolve приймає в себе аргумент функції ресолв
//     console.log('Данні отримані');

//     // setTimeout(() => {            // Потрібно щось повернути за допомогою return(); Так як данні являються об'явлені в іншій функції (product)
//     //     product.status = 'order';
//     //     console.log(product);
//     // }, 2000);

//     return new Promise((resolve, reject) => {
//     // const req2 = new Promise((resolve, reject) => { // Створюємо новий проміс як конструктор
//         setTimeout(() => {           
//                 product.status = 'order';
//                 resolve(product);
//             }, 2000);
//     });
//     // req2.then(data => {
//     //     console.log(data);
//     // })
    
// }).then(data => {
//     data.modify = true;
//     return data;
//     //console.log(data); // Відбувається чейнінг Ципочка
// }).then(data => {
//     console.log(data); // Переносимо консол лог сюди
// })// Допомагає створити певні дії які маю йти один за одним (код неважливо асинхронний він чи синхронний) колбек функція
// .catch(() => {
//     console.error("Є помилка"); // Коли спрацьовує reject КОд пропускає всі сходинки і стрибає в Catche. Використовується для багофіксу
// }).finally(()=>{
//     console.log('finaly');
// });


// // setTimeout(() => {           
// //     product.status = 'order';
// //     console.log(product)
// // }, 2000);


// // setTimeout(() =>{                                        /// Більш довгий вид асинхронності
// //     console.log("Підготовка данних");

// //     const product = {
// //         name: 'TV',
// //         price: 2000
// //     };

// //     setTimeout(() => {
// //         product.status = 'order';
// //         console.log(product)
// //     }, 2000);
// // }, 2000);


//////////////////////////////////////////////////////////////

const test = time => {
    return new Promise(resolve => {
        // setTimeout(()=> resolve(), time);
        setTimeout(()=>{
            resolve(), time
        });
    })
}
// test(1000).then(()=> console.log('1000 ms'));
// test(2000).then(()=> console.log('2000 ms'));

Promise.all([test(1000), test(2000)]).then(()=> {
    console.log("all");
});

Promise.race([test(1000), test(2000)]).then(()=> { //Виконує свої дії коли перший з 
    console.log("race");
});