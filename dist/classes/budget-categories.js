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
//# sourceMappingURL=budget-categories.js.map