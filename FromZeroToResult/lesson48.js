/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */


// Возьмите свой код из предыдущей практики
// const movieDB = {
//     movies: [
//         "Логан",
//         "Лига справедливости",
//         "Ла-ла лэнд",
//         "Одержимость",
//         "Скотт Пилигрим против..."
//     ]
// };

// const adv = document.querySelectorAll(".promo__adv img");

// adv.forEach( item => {
//     item.remove();
// });

// const poster = document.querySelector(".promo__bg"),
//       ganre = poster.querySelector(".promo__genre");

//       ganre.textContent = "Драма";

//       poster.style.backgroundImage = 'url("img/bg.jpg")';


// const movieList = document.querySelector('.promo__interactive-list');

// movieList.innerHTML = "";

// movieDB.movies.sort();

// movieDB.movies.forEach((film, i) => {
//     movieList.innerHTML +=  `
//     <li class="promo__interactive-item">${++i} ${film} 
//                             <div class="delete"></div>
//                         </li>
//     `;
// });


//  /////////////////// ДОдавання в список///////////////
// const filmName = document.getElementsByClassName('adding__input')[0];
// const addBtn = document.querySelector('button');
// const getValueInput = () =>{
    
//     addBtn.addEventListener('click', (e) =>{
//         e.preventDefault();
//         console.dir(filmName);
//         movieDB.movies.push(` ${filmName.value}`);
       
//         console.log(movieDB.movies);
//         movieList.innerHTML = "";
//         movieDB.movies.sort();
//         movieDB.movies.forEach((film, i) => {

//             movieList.innerHTML +=  `
//             <li class="promo__interactive-item">${++i} ${film} 
//                                     <div class="delete"></div>
//                                 </li>
//             `;
//         });
//     });

// };

// getValueInput();

// const deleteFilmBtn = document.querySelectorAll(".delete");
// //const deleteBtn = document.querySelector('.delete');

// function deleteFIlm (){


//     // deleteFilmBtn.addEventListener("click", e => {
//     //    console.log("i see button");
//     // //    movieDB.movies.push(` ${filmName.value}`);
//     //} );

// }

// deleteFIlm();

// код Петріченка

document.addEventListener('DOMContentLoaded', () =>{ // you can use window.addEventListener....
    
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const adv = document.querySelectorAll(".promo__adv img");
    const poster = document.querySelector(".promo__bg"),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type ="checkbox"]'),
          ganre = poster.querySelector(".promo__genre");
    const movieList = document.querySelector('.promo__interactive-list');

    addForm.addEventListener('submit', (event) =>{
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.cheked;

        if (newFilm) {

            if(newFilm.length > 21){
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favorite) {
                console.log("Улюбленний фільм");
            }

            movieDB.movies.push(newFilm);

            sortArr(movieDB.movies);
    
            createMovieList(movieDB.movies, movieList);
        }

        event.target.reset(); // addForm  Об'єкт події
    });

    const deleteAdv = (arr) => {
        arr.forEach( item => {
            item.remove();
        });
    };

    deleteAdv(adv);
    
    const makeCHanges = () =>{
        
        ganre.textContent = "Драма";
    
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    makeCHanges();
    
    
   
    
    const sortArr = (arr) => {

        arr.sort();
    };

    function createMovieList(films, parent) {
        parent.innerHTML = "";

        sortArr(films);

        films.forEach((film, i) => {

            parent.innerHTML +=  `
            <li class="promo__interactive-item">${++i} ${film} 
                                    <div class="delete"></div>
                                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) =>{
            btn.addEventListener('click', () =>{
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);
            });
        });
    }
    createMovieList(movieDB.movies, movieList);

});

