import { MonetaryBudgetItem } from "../types/budget-types";
import { UserId } from "../types/user-types";
import { BudgetCategories } from "./budget-categories";

export class Budget {
    public userId: UserId;
    public incomes: MonetaryBudgetItem[];
    public expenses: MonetaryBudgetItem[];
    public categories: BudgetCategories;

    constructor(userId: UserId, incomes: MonetaryBudgetItem[], expenses: MonetaryBudgetItem[], categories: BudgetCategories){
        const monetaryItemsList = incomes.concat(expenses);
        monetaryItemsList.forEach( item => {
            if(categories.categoryList.indexOf(item.category) == -1){
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