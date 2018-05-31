import { IProduct } from "./product.interface";
import { IUser } from "./user.interface";

export interface IOrder {
    id?: Number,
    description?: String,
    products?: IProduct[],
    user?: IUser,
    delivered?: boolean,
    checkout?: boolean
}