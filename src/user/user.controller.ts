import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiQuery } from '@nestjs/swagger';
import { APIQueryParam, IApiQuery } from 'src/core/generics/query';
import { CreateUserDTO } from './models/user.dto';
import { User } from './models/user.schema';
import { UserService } from './user.service';

/**
 * This is the controller for user module and it will contain
 * all the logic for user REST APIs
 */
@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Post()
	@ApiBody({ type: CreateUserDTO })
	async create(@Body() user: CreateUserDTO): Promise<Partial<User>> {
		return this.userService.create(user);
	}

	@Get()
	@ApiQuery({
		name: 'filter',
		schema: {
			type: 'string',
			example: {
				where: { _id: '' },
				pagination: { page: 1, limit: 100 },
				sort: {}
			}
		}
	})
	getUser(
		@APIQueryParam('filter') filter: IApiQuery<User>
	): Promise<Array<User> | User> {
		return this.userService.get(filter);
	}
}
