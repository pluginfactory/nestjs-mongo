import { Controller, Get, Post } from '@nestjs/common';
import { User } from './models/user.schema';

/**
 * This is the controller for user module and it will contain
 * all the logic for user REST APIs
 */
@Controller('user')
export class UserController {
	@Post()
	create(): Partial<User> {
		return {};
	}

	@Get()
	getUser(): Partial<User> {
		return {};
	}
}
