import { Prop, Schema } from '@nestjs/mongoose';
import { IGeneric } from './generic.interface';

@Schema()
export class GenericSchema implements IGeneric {
	@Prop()
	createdBy: string;
	@Prop()
	createdOn: Date;
	@Prop()
	updatedOn: Date;
	@Prop()
	updatedBy: string;
	@Prop()
	deleted: boolean;
	@Prop()
	checksum: string;
}
