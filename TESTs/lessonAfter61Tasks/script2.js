function isPangram(string) {
    const arrString = str.trim().toLowerCase().split(" ").join("").split(""); // Створюємо строку > Прибираємо пробіли з країв> Все рівняємо
    //Під один текст> Розбиваємо його на массив і прибираються пробіли між словами> об'єднуємо в строку всі ЕлЕменти массива> Робимо знову массивом

   return (new Set(arrString).size == 26); // За допомогою Set size Перевіряємо розмір і сортуємо (якщо строка має 26 символів неважливо яких нам повернется True)


}

console.log(isPangram("The quick brown fox jumps over the lazy dog"));