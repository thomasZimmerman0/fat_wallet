import { UserId } from "../types/user-types";

export class User {
    public userId: UserId;
    public firstName: string;
    public lastName: string;
    
    constructor(userId: UserId, firstName: string, lastName: string){
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}