import { IUser } from "../user.interface";

export interface IProductDTO {
    title?: String;
    description?: String;
    priceMain?: Number;
    priceDecimal?: Number;
    discount?: Number;
    currency?: String;
    admin?: IUser;
    isPublic?: Boolean;
}