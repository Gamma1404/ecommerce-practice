import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
    constructor(private readonly usersRepository: UsersRepository) {}
    
    getUserByEmail(email: string) {
        return this.usersRepository.getUserByEmail(email)
    }
    
    getUsers(page: string, limit: string) {
        return this.usersRepository.getUsers(Number(page), Number(limit))
    }

    getUserById(id: string) {
        return this.usersRepository.getUserById(Number(id))
    }

    createUser(newUser) {
        return this.usersRepository.createUser(newUser)
    }

    updateUser(id, editedUser) {
        return this.usersRepository.updateUser(Number(id), editedUser)
    }

    deleteUser(id) {
        return this.usersRepository.deleteUser(Number(id))
    }

}
