import { ClassSerializerInterceptor, Controller, Get, HttpException, HttpStatus, Inject, Param, UseInterceptors } from '@nestjs/common';
import { UsersService } from 'src/users/service/users/users.service';
import { serializedUser } from 'src/users/types';

@Controller('users')
export class UsersController {
    constructor(@Inject('USER_SERVICE') private readonly userService: UsersService) { }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get()
    getAllUSers() {
        const user = this.userService.getUsers()
        if (user) return user;
        throw new HttpException('user not found', HttpStatus.NOT_FOUND)
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get(':username')
    getByName(@Param('username') username: string) {
        const getUser = this.userService.getUserByName(username)
        if (getUser) return new serializedUser(getUser)
        throw new HttpException('user not found', HttpStatus.BAD_REQUEST)
    }
}
