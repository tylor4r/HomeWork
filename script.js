'use scrict';
// alert("Привет это проверка работы подключения");
let money = prompt ("Ваш бюджет на месяц?");
let time = prompt ("Введите дату в формате YYYY-MM-DD");
let appDate = {
  budjet: money  
};
let spendThisMonth = prompt ("Введите обязательную статью расходов в этом месяце");
let howMatch = prompt("Во сколько обойдется?");
let expenses =  { // Объект с обазательными расходами

};

let optionalExpenses = { // Это объект с необязательными расходами

};
var income =  [  // Массив дополнительных доходов
    "savings"       // В задании было создать свойство и оставить его пустым
];
expenses.spendThisMonth = +spendThisMonth; // Сохраняет в объект обязательные вопросы, 
// Которые были в вопросе выше
expenses.howMatch = +howMatch;

appDate.money = +money; // Два первых вопроса, сохраняет в объект созданный выше
appDate.timeDate = +time;
console.log(appDate.money);
console.log(appDate.timeDate);
console.log(typeof(appDate.money));
console.log(typeof(appDate.timeDate));
var formula = +money / 30 - +howMatch;
console.log(typeof(formula));  // Не получалось сложить в низу, поэтому решил проверить тип
alert("В день я могу тратить" + ":" + formula); //Все вышло отлично