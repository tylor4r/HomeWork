'use script';
let money = prompt("Ваш бюджет на месяц", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD","");

let appDate = {
    budjet: money,
    expenses: {},  // Объект внутри объекта?
    optionalExpenses: {},
    income:[],
    timeDate: time,
    savings: false
}

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    a2 = prompt("Во сколько обойдётся?", ""),
    a3 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    a4 = prompt("Во сколько обойдётся", "");

appDate.expenses.a1 = a2;
appDate.expenses.a3 = a4;

alert(appDate.bujet/30);