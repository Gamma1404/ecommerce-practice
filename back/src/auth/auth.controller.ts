import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Get()
    getAuth() {
        return this.authService.getAuth()
    }

    @Post('signin')
    async singInAuth(@Body() credentials) {
        const {email, password} = credentials
        return this.authService.singInAuth(email, password)
    }
}
