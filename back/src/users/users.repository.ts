import { Injectable } from '@nestjs/common';
import { IUser } from 'src/interfaces/user.interface';

const users : IUser[] = [
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

@Injectable()
export class UsersRepository {
    getUsers() : IUser[] {
        return users
    }
}
