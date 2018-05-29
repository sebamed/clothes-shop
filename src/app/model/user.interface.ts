import { IRole } from "./role.interface";

export interface IUser {
    id?: Number;
    username?: String;
    firstName?: String;
    lastName?: String;
    role?: IRole;
    email?: String;
    password?: String;
} 