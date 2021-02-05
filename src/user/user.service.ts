import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDTO } from './models/user.dto';
import { User, UserDocument } from './models/user.schema';
@Injectable()
export class UserService {
	constructor(
		@InjectModel(User.name) private userModel: Model<UserDocument>
	) { }
	/**
	 * use this method to create a new user
	 * @param {CreateUserDTO} user
	 */
	async create(user: CreateUserDTO): Promise<User> {
		return this.userModel.create(user);
	}
}
