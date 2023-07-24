import { Exclude } from "class-transformer";

export class Users {
    username: string;
    password: string
}

export class serializedUser {
    username: string;

    @Exclude()
    password: string

    constructor(partial: Partial<serializedUser>) {
        Object.assign(this, partial)
    }
}