'use strict';

let money = prompt("Ваш бюджет на месяц", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");





let optionalExpenses ;

let appData = {
    budget : money,
    // timeData : time,
    expenses : {},
    optionalExpenses : {},
    income :[],
    savings :false

}
let moneyMust1  = prompt("Введите обязательную статью расходов в этом месяце") ;
let moneyMust2  = prompt("Во сколько обойдется?") ;
let moneyMust3  = prompt("Введите обязательную статью расходов в этом месяце") ;
let moneyMust4  = prompt("Во сколько обойдется?") ;

appData.expenses.moneyMust1 = moneyMust2;
appData.expenses.moneyMust3 = moneyMust4;

alert(appData.budget/30);