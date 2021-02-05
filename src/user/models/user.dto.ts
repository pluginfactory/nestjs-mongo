import { ApiProperty } from '@nestjs/swagger';

/**
 * properties accepted while creating a user. DTO defines the
 * object model. It also define swagger model.
 */
export class CreateUserDTO {
	@ApiProperty()
	readonly username: string;
	@ApiProperty()
	readonly firstName: string;
}
