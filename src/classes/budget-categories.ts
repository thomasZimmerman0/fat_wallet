import { UserId } from "../types/user-types";

export class BudgetCategories {
    private userId: UserId;
    public categoryList: string[]

    constructor(userId: UserId, categoryList: string[]){
        this.userId = userId;
        this.categoryList = categoryList
    }

    modifyCategoryToList(category: string, removeCateogy: boolean = false){
        if(!removeCateogy){
            this.categoryList.push(category);
        } else {
            let indexOfCategory = this.categoryList.indexOf(category);
            this.categoryList.splice(indexOfCategory, 1);
        }
    }

}