import { createParamDecorator, ExecutionContext } from '@nestjs/common';
/**
 * This file will contain the REST query params which are generic in nature.
 * These params will be used by all of the controller routes to handle the
 * quering of entities in a generic way.
 */
export declare type WhereQueryType<T> = {
	[P in keyof T]?: any;
};

export interface SortOptions {
	ASC: 'asc';
	DESC: 'desc';
}

export declare type Sort<T> = {
	[K in keyof T]?: SortOptions;
};

export declare type Pagination = {
	page: number;
	limit: number;
};

/**
 * Query parameter to transform the incoming query params to the
 * ApiQuery class instance
 */
export const APIQueryParam = createParamDecorator(
	({ key = 'filter' }, ctx: ExecutionContext) => {
		const query = ctx.switchToHttp().getRequest().query;
		const parse = query[key]
			? JSON.parse(query[key])
			: ({
					pagination: { page: 1, limit: 100 }
			  } as IApiQuery<any>);
		return parse;
	}
);

export interface IApiQuery<T> {
	where: WhereQueryType<T>;
	sort: Sort<T>;
	pagination: Pagination;
}

export class APIQuery<T> implements IApiQuery<T> {
	where: WhereQueryType<T>;
	sort: Sort<T>;
	pagination: Pagination = { page: 1, limit: 100 };
}
