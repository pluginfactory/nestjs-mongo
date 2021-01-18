import {Schema} from 'mongoose';
import {IUser} from './user.interface';
/**
 * this is the user schema that will define how the data will
 * be persisted into the database and how the user collections
 * will look like.
 * 
 */
export const UserSchema = new Schema({
    username: { type: String },
    firstName: { type: String },
});