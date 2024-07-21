import { Injectable } from '@nestjs/common';
import { IUser } from 'src/interfaces/user.interface';
import { UsersRepository } from 'src/users/users.repository';

@Injectable()
export class AuthService {
    constructor(private readonly usersRepository: UsersRepository) {}

    getAuth() {
        return 'Retorna la autorización'
    }

    async singInAuth(email: string, password: string) {
        if(!email || !password) return 'Se requieren email y password'
        const user: IUser = await this.usersRepository.getUserByEmail(email)
        if(!user || user.password !== password) return 'Email o password incorrectos'
        return 'Usuario logueado'
    }
}
