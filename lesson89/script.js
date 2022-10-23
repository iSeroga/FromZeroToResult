const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) { 
   return arr.filter(film => film.rating >= 8); // Звертаємось до массива > починаємо фільтрацію (назначаю назву змінної і запускаю функцію. беремо елемент функції який повязагний з батьківським елементом і даємо значення)
}
 

function showListOfFilms(arr) {
    //return arr.reduce((acc, curr) => `${typeof(acc) === 'object' ? acc.name : acc}, ${curr.name}`);
    // or
    return arr.map(elem => elem.name).join(',')
}

function setFilmsIds(arr) {
    return arr.map((film, i) => {film.id = i; return film;})
}

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
    return arr.map(film => film.id === 0 || film.id ? true : false)
}
console.log(checkFilms(tranformedArray));