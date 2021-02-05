import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { GenericSchema } from 'src/core/interfaces/generic.schema';
/**
 * this is the user schema that will define how the data will
 * be persisted into the database and how the user collections
 * will look like.
 */

@Schema()
export class User extends GenericSchema {
	@Prop()
	username: string;
	@Prop()
	firstName: string;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
