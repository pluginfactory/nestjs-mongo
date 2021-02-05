import { IGeneric } from '../../core/interfaces/generic.interface';
/**
 * The user interface containing the user properties
 * to be persisted into the database.
 */
export interface IUser extends IGeneric {
  readonly username: String;
  readonly firstName: String;
  readonly lastName: String;
  readonly online: Boolean;
}
