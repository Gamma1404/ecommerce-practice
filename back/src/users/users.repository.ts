import { Injectable } from '@nestjs/common';
import { IUser } from 'src/interfaces/user.interface';

let users : IUser[] = [
    {
        id: 1,
        email: 'DWayne@mail.com',
        name: 'Damian Wayne',
        password: 'Robin',
        address: 'False Streed 123',
        phone: '1234566789',
        country: 'United Stated',
        city: 'Gotham'
    },
    {
        id: 2,
        email: 'BWayne@mail.com',
        name: 'Bruce Wayne',
        password: 'Batman',
        address: 'False Streed 123',
        phone: '1234566789',
        country: 'United Stated',
        city: 'Gotham'
    },
    {
        id: 3,
        email: 'DGrayson@mail.com',
        name: 'Dick Grayson',
        password: 'Nightwing',
        address: 'Wrong Streed 123',
        phone: '987654321',
        country: 'United Stated',
        city: 'Blüdhaven'
    },
    {
        id: 4,
        email: 'CKent@mail.com',
        name: 'Clark Kent',
        password: 'Superman',
        address: 'True Streed 123',
        phone: '234561789',
        country: 'United Stated',
        city: 'Metropolis'
    }
]
let id = 5;

@Injectable()
export class UsersRepository {
    async getUsers(page: number, limit: number) : Promise<Omit<IUser, 'password'>[]> {
        const start = (page - 1) * limit
        const end = start + limit
        const usersList = users.slice(start, end)
        return usersList.map(({password, ...user}) => user)
    }

    async getUserById(id: number): Promise<Omit<IUser, 'password'>> {
        const {password, ...user} = users.find(user => user.id === id)
        return user
    }

    async createUser(user: Omit<IUser, 'id'>): Promise<string> {
        const newUser = {...user, id}
        users.push(newUser)
        id++
        return `Se creo usuario con id:${newUser.id}`
    }

    async updateUser(id: number, editedUser: Partial<IUser>): Promise<string> {
        users = users.map(user => {
            if(user.id === id) {
                return {...user, ...editedUser}
            }
            return user
        })
        return `Se edito usuario con id:${id}`
    }

    async deleteUser(id: number): Promise<string> {
        users = users.filter(user => user.id !== id)
        return `Se elimino al usuario con id:${id}`
    }
}
