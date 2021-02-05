import { Document } from 'mongoose';
/**
 * The generic interface to be extended by the basic
 * documernt interface to extends all the basic model
 * documents
 */
export interface IGeneric extends Document {
  readonly createdOn: Date;
  readonly createdBy: string;
  readonly updatedOn: Date;
  readonly updatedBy: string;
  readonly deleted: boolean;
  readonly checksum: string;
}
