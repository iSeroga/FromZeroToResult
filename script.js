
    // const numberOfFilms = +prompt(`Скільки фільмів вже дивився?`,'');

    // const personalMovieDB = {
    //     count: numberOfFilms,
    //     movies: {},
    //     actors: {},
    //     genres: [], 
    //     privat: false
    // };
    // const a = prompt ('Один з останніх фільмів?', " "),
    //     b = prompt ('На скільки оцінюєшь ?', " "),
    //     c = prompt ('Один з останніх фільмів?', " "),
    //     d = prompt ('На скільки оцінюєшь ?', " ");

    // personalMovieDB.movies[a] = b;
    // personalMovieDB.movies[c] = b;

    // console.log(personalMovieDB);

    // const num = 50;

    // switch(num){
    // case 49:
    //     console.log("wrong");
    //     break;
    // case 100:
    //     console.log("wrong");
    //     break;
    // case 50:
    //     console.log("right");
    //     break;
    // default:
    //     console.log(" not this time");
    //     break;
    // }


    // const humburger = true;
    // const fries = false;
    // if (humburger&& fries ){
    //     console.log("good");
    // }
    

//console.log((humburger  && fries));

//console.log( 5 === 5 && 3 > 1 || 5);

// let result = "";
// const lenght = 7;
// for (let i =1; i<lenght; i++){
//     for (let j = 0; j < i; j++){
//         result += "*";

//     }

//     result +='\n';
// }


// console.log(result);
// first: for (let i = 0; i < 3; i++){
//     console.log (`first level: ${i}`);
//     for (let j = 0; j < 3; j++){
//         console.log (`second level: ${j}`);
//         for (let k = 0; k < 3; k++){
//             if (k ==2 ) {continue first;}
//             console.log (`third level: ${k}`);
//         }
//     }
// }

//  for (let i = 2; i <= 16; i++) {
//           if (i % 2 === 0) {
//               continue;
//           } else {
//      console.log(i);
//          }
//   }

// let i = 2;
//   while (i < 16){
//     if (i % 2 === 0) {
//               continue;
//   } else {
//         console.log(i);
//                  }
//                  i++;
//   } 
// const data = [5, 10, 'Shopping', 20, 'Homework'];

// for (let i = 0; i < data.length; i++){
//      if (typeof(data[i]) === 'number') {
//     data[i] = data[i]*2;
//     }
//     else
//     data[i] = `${data[i]} - done`;
// }console.log(i);


// // Не трогаем
// return data;

//const lines = 5;
//let result = '';
//for (let i = 0;  )

//  for (let i = 5; i < 11; i++){
//     console.log(i);
// }
// const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];
//     i = data.reverse();
//     // Пишем решение вот тут
//     for (let i = 0; i<data.length; i++){
//     console.log(data[i]);
// }
// return result;
//////////////////////////////////////////////////////////////////////
// Рівнобедрений трикутник DONE!!!!
// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++){//перша функція для висоти ялинки
//     for (let j = 0; j < lines - i ; j++){ //Вільний простір з лівої сторони
//         result += " ";
//     }

//     for (let j = 0; j< 2*i +1; j++){// виявлення зірочок
//         result += "*";
//     }
//     result += " \n";
// }
// console.log(result);
/////////////////////////////////////////////////////////////////////
//Каталог фільмів  Завд 2
// const numberOfFilms = +prompt(`Скільки фільмів вже дивився?`,'');

//     const personalMovieDB = {
//         count: numberOfFilms,
//         movies: {},
//         actors: {},
//         genres: [], 
//         privat: false
//     };

//     for (let i= 0; i < 2; i++ ){
//         const a = prompt ('Один з останніх фільмів?', " "),
//             b = prompt ('На скільки оцінюєшь ?', " ");
//         if (a != null && b!= null && a != '' && b != ''&& a.length < 50){
//             personalMovieDB.movies[a] = b;
//             console.log ("done");
//         }
//         else{
//             console.log('error');
//             i--;
//         }
//     }
    ///// second way///////////////////
    // let x = 0;
    // while (x < 2){
    //     const a = prompt ('Один з останніх фільмів?', " "),
    //         b = prompt ('Ha скільки оцінюєшь ?', " ");
    //         if (a != null && b!= null && a != '' && b != '' && a.length < 50){
    //                     personalMovieDB.movies[a] = b;
    //                     console.log ("done");
    //                 }
    //                 else{
    //                     console.log('error');
    //                     x--;
    //                 }
    //         x++;
    // };
    

    // if (personalMovieDB.count < 10){
    //     console.log("мало фільмів");
    // }
    // else if (personalMovieDB.count >= 10 &&personalMovieDB.count <= 30 ){
    //     console.log("норм");
    // }
    // else if (personalMovieDB.count > 30 ) {
    //     console.log("кіно гігант");
    // }
    // console.log(personalMovieDB);
    //finished///////////////////////////////////////////////////

    //FUNCTIONS////////////////////////////////////////////////

// 1 task//

// function sayHello(name) {
//     return `Привет, ${name}!`;
// }
// console.log(sayHello('Alex'));

//task 2///
// function returnfuncNumbers (num) {
//         return [num - 1, num, num + 1];
// }
// console.log(returnfuncNumbers(5));

///task 3
    // function getMathResult(num , times) {
    //      if( typeof(times) !=='number'|| times <=0  ){
    //         return num;
    //      }
    //      let str = '';
    //      for (let i = 1; i <= times; i++ ){
    //         if (i === times){
    //             str += `${num * i }`;
    //         } else{
    //             str += `${num *i}---`;
    //         }
    //      }return str;
    // }

    // console.log (getMathResult(10,0));



    /// Big Zawdania exercise
    // let numberOfFilms;
    // function start() {
    //    numberOfFilms = +prompt(`Скільки фільмів вже дивився?`,'');
    //    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    //     numberOfFilms = +prompt(`Скільки фільмів вже дивився?`,'');
    //    }
    // }
    // start ();
    // const personalMovieDB = {
    //     count: numberOfFilms,
    //     movies: {},
    //     actors: {},
    //     genres: [], 
    //     privat: false
    // };
    // function rememberMyFilms(){
    //     for (let i= 0; i < 2; i++ ){
    //         const a = prompt ('Один з останніх фільмів?', " "),
    //             b = prompt ('На скільки оцінюєшь ?', " ");
    //         if (a != null && b!= null && a != '' && b != ''&& a.length < 50){
    //             personalMovieDB.movies[a] = b;
    //             console.log ("done");
    //         }
    //         else{
    //             console.log('error');
    //             i--;
    //         }
    //     }
    // }
    // function detectPersonalLevel() {
    //     if (personalMovieDB.count < 10){
    //         console.log("мало фільмів");
    //     }
    //     else if (personalMovieDB.count >= 10 &&personalMovieDB.count <= 30 ){
    //         console.log("норм");
    //     }
    //     else if (personalMovieDB.count > 30 ) {
    //         console.log("кіно гігант");
    //     }
    //     console.log(personalMovieDB);
    // }
    

    // detectPersonalLevel();

    // function showMyDB(hiden){
    //     if(!hiden){
    //         console.log(personalMovieDB);
    //     }
    // }
    // showMyDB(personalMovieDB.privat);

    // function writeYourGenres(){
    //     for (let i=1; i<=3; i++){
    //         const genre = prompt (`Ваш улюблений жанр ${i}`);
    //         personalMovieDB.genres[i-1] = genre;
            
    //     }
    // }
    // writeYourGenres();

    // function calculateVolumeAndArea(side) {
    //     if (typeof(side) !==`number`|| side <= 0){
    //         return (" Під час вираховування сталася помилка");
    //     }
    //     let volume = 0,
    //     area = 0;
    //     volume = side * side * side;
    //     area = 6* (side * side);
    //     // else{
    //     //     `Об'єм куба = ${side*side*side}, площа всієї поверхні: ${side*side*6} `;
    //     // }
    //     return `Об'єм куба = ${volume}, площа всієї поверхні: ${area} `;
    // }
    // console.log(calculateVolumeAndArea(55));

    // function getCoupeNumber(seat) {
    //     if( typeof(seat) !==`number`|| seat <= 0 || !Number.isInteger(seat) ){
    //         return `Будьласка перевірте правельність введеного номера місця`;
    //     }
    //     else if (seat >=36){
    //         return 'Таких місць в вагоні не існує';
    //     }
    //     for (let i = 4; i <36 ; i = i + 4){
    //         if (seat <= i){
    //             return Math.ceil(i / 4);
    //         }
    //     }
    // }
    // console.log(getCoupeNumber(25));
    // function getTimeFromMinutes(mins) {
    //         if (typeof(mins) !== `number` || mins < 0 || !Number.isInteger(mins)){
    //             return `Помилка, перевірте дані`;
    //         }

    //         const hours = Math.floor(mins/60);
    //         const minutes = mins % 60;
    //         let hourStr = ``;
    //         switch (hours){
    //             case 0:
    //                 hourStr = `годин`;
    //                 break;
    //             case 1: {
    //                 hourStr = 'година';
    //                 break;
    //             }
    //             case 2:
    //             case 3:
    //             case 4:
    //                 hourStr = 'години';
    //                 break;
    //             default :
    //             hourStr = 'Годин';
    //             }
    //             return `Це ${hours} ${hourStr} і ${minutes} хвилин`;
    //     }
    //     console.log(getTimeFromMinutes(555500));

            // function fib(n){
            //     return n <=1 ? n : fib(n-1) + fib(n-2);}
            // console.log(fib(25));



            // function fib(num) {
            //     if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
            //         return "";
            //     }
            
            //     let result = '';
            //     let first = 0;
            //     let second = 1;
            
            //     for (let i = 0; i < num; i++) {
            //         if (i + 1 === num) {
            //             result += `${first}`;
            //             // Без пробела в конце
            //         } else {
            //             result += `${first} `;
            //         }
            
            //         let third = first + second;
            //         first = second;
            //         second = third;
            //     }
            
            //     return result;
            // }
            
            // console.log(fib(25));  
            ///kasda


