import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { IUser } from 'src/interfaces/user.interface';
import { NameDto } from './dto/name.dtos';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    getUsers(@Query('page') page: string, @Query('limit') limit: string) {
        if(!page) page = '1'
        if(!limit) limit = '5'
        return this.usersService.getUsers(page, limit)
    }

    @Get(':id')
    getUserById(@Param('id') id: string) {
        return this.usersService.getUserById(id)
    }

    @Get('name')
    getUserByName(@Body('name') nameDto: NameDto) {
        return this.usersService.getUserByName(nameDto.name)
    }

    @Post()
    createUser(@Body() newUser: Omit<IUser, 'id'>) {
        return this.usersService.createUser(newUser)
    }

    @Put(':id')
    updateUser(@Param('id') id: string, @Body() editedUser: Partial<IUser>) {
        return this.usersService.updateUser(id, editedUser)
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string) {
        return this.usersService.deleteUser(id)
    }
}
