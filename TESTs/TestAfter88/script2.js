'use striict'
const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: -10400},
    {amount: 11400}
];

const getPositiveIncomeAmount = (data) => {
        return data.filter(money => money.amount > 0 ).reduce((a, b)=> a + b.amount, 0)

};

const getTotalIncomeAmount = (data) => {
    return data.some(money => money.amount < 0) ? data.reduce((a,b)=> a + b.amount, 0) : getPositiveIncomeAmount(data);
    // Повертаємо масив Дата(фундс), Додаємо метод фільтрації соме  Називаємо один елемент і через нього звертаємось до конкретного об'єкту зі значенням
    // порівнюємо його з нулем. Використовуємо тернарний оператор Let result умова ? значення 1 : значення 2
    // використовуємо оператор редюс для того щоб збити і обрахувати значення. Нуль це стабільне число. Якщо умова виконується то починаємо функцію
    
};
console.log(getTotalIncomeAmount(funds))