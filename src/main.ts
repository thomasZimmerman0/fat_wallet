import { User } from "./classes/user";
import { UserId } from "./types/user-types";
import { Budget } from "./classes/budget";
import { BudgetCategories } from "./classes/budget-categories";
import { MonetaryBudgetItem } from "./types/budget-types";

const user1Id: UserId = { ID: 1};
const categoryList = [
    "Food",
    "Nonessiential",
    "Bills",
    "Savings",
    "Passive",
    "Job"
];

const expenses: MonetaryBudgetItem[] = [
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

const incomes: MonetaryBudgetItem[] = [
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
]

const user1 = new User(user1Id, "Tommy", "Zimmerman");
const userCategories = new BudgetCategories(user1Id, categoryList);
const budget = new Budget(user1Id, incomes, expenses, userCategories);

console.log(budget.userId);
console.log(budget.incomes);
console.log(budget.expenses);
console.log(budget.categories);
console.log("howdy yall");
