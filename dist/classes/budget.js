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
//# sourceMappingURL=budget.js.map