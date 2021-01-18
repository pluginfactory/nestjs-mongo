import { Controller, Get, Post } from '@nestjs/common';

/**
 * This is the controller for user module and it will contain
 * all the logic for user REST APIs
 */
@Controller('user')
export class UserController {
    @Post()
    create(): Object {
        return {};
    }

    @Get()
    getUser(): Object {
        return {};
    }
}
