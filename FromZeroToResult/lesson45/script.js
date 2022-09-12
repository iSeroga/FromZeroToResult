const btn = document.querySelector('button');

// btn.onclick = function() {
//     alert("click");
// };

const deleteElement = (e) =>{
    e.target.remove();
};

// btn.addEventListener('mouseenter', (e) =>{ // e це об'єкт події. Через кому можна передати ще данні... В данному випадку це наїздв на область mouseenter
//     console.log(e.target);
// });
btn.addEventListener('mouseenter', deleteElement);  // Підставляємо функцію як другий елемент щоб е писати стрілочну функцію.