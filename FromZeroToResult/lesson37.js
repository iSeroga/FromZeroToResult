

const personalMovieDB = {

    count: 0,
    movies: {},
    actors: {},
    genres: [], 
    privat: false,
    start: function () { //  or start: () => { // СТрілкова функція.
           personalMovieDB.count = +prompt(`Скільки фільмів вже дивився?`,'');
           while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt(`Скільки фільмів вже дивився?`,'');
           }
        },
    rememberMyFilms: function (){
                for (let i= 0; i < 2; i++ ){
                    const a = prompt ('Один з останніх фільмів?', " "),
                        b = prompt ('На скільки оцінюєшь ?', " ");
                    if (a != null && b!= null && a != '' && b != ''&& a.length < 50){
                        personalMovieDB.movies[a] = b;
                        console.log ("done");
                    }
                    else{
                        console.log('error');
                        i--;
                    }
                }
        },
    detectPersonalLevel: function() {
                 if (personalMovieDB.count < 10){
                        console.log("мало фільмів");
                    }
                else if (personalMovieDB.count >= 10 &&personalMovieDB.count <= 30 ){
                        console.log("норм");
                    }
                else if (personalMovieDB.count > 30 ) {
                        console.log("кіно гігант");
                    }
                console.log(personalMovieDB);
        },
    showMyDB: function (hiden){
            if(!hiden){
                console.log(personalMovieDB);
                }
            },
    toggleVisibleMyDB:function(){
                if(personalMovieDB.privat){
                    personalMovieDB.privat = false;
                }
                else{
                    personalMovieDB.privat = true;
                }
            },
    writeYourGenres: function (){
                    for (let i=1; i<=3; i++){
                        let genre = prompt(`Ваш улюблений жанр ${i}`);
                        if(genre ===" " || genre == null){
                            console.log(' Ви не подали данні');
                            i--;
                        }
                        else{
                            personalMovieDB.genres[i-1] = genre;
                        }
                    }
                    personalMovieDB.genres.forEach((item, i)=> {
                    console.log(`Улюблений жанр  ${i+1} - це ${item}`);
                    });
                } 
    };
//////////////////

////task #1//////////////////////////

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    let square = 0;
    let volume = 0;

    data.shops.forEach(shop => {
        square += shop.width * shop.length;
    });

    volume = data.height * square;

    if (data.budget - (volume * data.moneyPer1m3) >= 0) {
        return 'Бюджета достаточно';
    } else {
        return 'Бюджета недостаточно';
    }
}

console.log(isBudgetEnough(shoppingMallData));

////////////task 2 /////////////////

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra',  'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
arr.sort();

    let team1 = arr.slice(0, 3),
        team2 = arr.slice(3, 6),
        team3 = arr.slice(6, 9),
        outsiders = [];
        return [team1, team2, team3, `Студенти що лишились: ${ arr.length < 10 ? "- " : arr.slice(9 ,arr.length)}`];
}
console.log(sortStudentsByGroups(students));