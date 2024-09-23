(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetCategories = void 0;
class BudgetCategories {
    constructor(userId, categoryList) {
        this.userId = userId;
        this.categoryList = categoryList;
    }
    modifyCategoryToList(category, removeCateogy = false) {
        if (!removeCateogy) {
            this.categoryList.push(category);
        }
        else {
            let indexOfCategory = this.categoryList.indexOf(category);
            this.categoryList.splice(indexOfCategory, 1);
        }
    }
}
exports.BudgetCategories = BudgetCategories;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Budget = void 0;
class Budget {
    constructor(userId, incomes, expenses, categories) {
        const monetaryItemsList = incomes.concat(expenses);
        monetaryItemsList.forEach(item => {
            if (categories.categoryList.indexOf(item.category) == -1) {
                let problemType = item.monetaryType == "income" ? "Income" : "Expense";
                throw new Error(problemType + " item contained an unkown category");
            }
        });
        this.userId = userId;
        this.incomes = incomes;
        this.expenses = expenses;
        this.categories = categories;
    }
}
exports.Budget = Budget;

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(userId, firstName, lastName) {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
exports.User = User;

},{}],4:[function(require,module,exports){
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

},{"./classes/budget":2,"./classes/budget-categories":1,"./classes/user":3}]},{},[4]);
