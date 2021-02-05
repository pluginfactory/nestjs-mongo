import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './models/user.schema';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
	imports: [
		MongooseModule.forRoot('mongodb://localhost/users', {
			connectionName: 'users'
		}),
		MongooseModule.forFeature(
			[
				{
					name: User.name,
					schema: UserSchema
				}
			],
			'users'
		)
	],
	controllers: [UserController],
	providers: [UserService]
})
export class UserModule { }
