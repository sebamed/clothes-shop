import { IUser } from "./user.interface";
import { IImage } from "./image.interface";

export interface IProduct {
    id?: Number;
    title?: String;
    description?: String;
    priceMain?: Number;
    priceDecimal?: Number;
    discount?: Number;
    currency?: String;
    admin?: IUser;
    isPublic?: Boolean;
    image?: IImage;
}