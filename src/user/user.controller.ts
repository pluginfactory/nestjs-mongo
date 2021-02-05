import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { CreateUserDTO } from './models/user.dto';
import { User } from './models/user.schema';
import { UserService } from './user.service';

/**
 * This is the controller for user module and it will contain
 * all the logic for user REST APIs
 */
@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) { }

	@Post()
	@ApiBody({ type: CreateUserDTO })
	async create(@Body() user: CreateUserDTO): Promise<Partial<User>> {
		return this.userService.create(user);
	}

	@Get()
	async getUser(): Promise<Partial<User>> {
		return {};
	}
}
