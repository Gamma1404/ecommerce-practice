import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    getAuth() {
        return 'Retorna la autorización'
    }
}
