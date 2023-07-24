import { Injectable } from '@nestjs/common';
import { Users, serializedUser } from 'src/users/types';

@Injectable()
export class UsersService {
    private users: Users[] = [
        {
            username: 'ankit',
            password: "ankit",
        },
        {
            username: 'suresh',
            password: "suresh",
        },
        {
            username: 'rajesh',
            password: "rajesh",
        },
    ];

    getUsers() {
        return this.users.map((user) => new serializedUser(user));
    }

    getUserByName(username: string) {
        return this.users.find((user) => user.username === username)
    }

}
