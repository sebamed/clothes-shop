import { IRole } from "./role.interface";
import { IOrder } from "./order.interface";

export interface IUser {
    id?: Number;
    username?: String;
    firstName?: String;
    lastName?: String;
    role?: IRole;
    email?: String;
    password?: String;
    order?: IOrder
} 