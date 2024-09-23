"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./classes/user");
const budget_1 = require("./classes/budget");
const budget_categories_1 = require("./classes/budget-categories");
const user1Id = { ID: 1 };
const categoryList = [
    "Food",
    "Nonessiential",
    "Bills",
    "Savings",
    "Passive",
    "Job"
];
const expenses = [
    {
        monetaryType: "expense",
        category: categoryList[0],
        amount: 99
    },
    {
        monetaryType: "expense",
        category: categoryList[1],
        amount: 102
    },
];
const incomes = [
    {
        monetaryType: "income",
        category: categoryList[5],
        amount: 1000
    },
    {
        monetaryType: "expense",
        category: categoryList[4],
        amount: 150
    },
];
const user1 = new user_1.User(user1Id, "Tommy", "Zimmerman");
const userCategories = new budget_categories_1.BudgetCategories(user1Id, categoryList);
const budget = new budget_1.Budget(user1Id, incomes, expenses, userCategories);
console.log(budget.userId);
console.log(budget.incomes);
console.log(budget.expenses);
console.log(budget.categories);
console.log("what");
//# sourceMappingURL=main.js.map