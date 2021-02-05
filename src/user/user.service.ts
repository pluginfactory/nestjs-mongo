import { Injectable } from '@nestjs/common';
import { User } from './models/user.schema';
@Injectable()
export class UserService {
	create(user: User): Partial<User> {
		return {};
	}
}
