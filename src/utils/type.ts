type Direction = "NORTH" | "SOUTH" | "EAST" | "WEST";

interface Information {
	id: number;
	number: number;
	street: string;
	district: string;
	city: string;
	country: string;
	landSize: number;
	numberOfFloor: number;
	direction: Direction;
	bedrooms: number;
	toilets: number;
}

interface Sort {
	empty: boolean;
	unsorted: boolean;
	sorted: boolean;
}

interface Pageable {
	pageNumber: number;
	pageSize: number;
	sort: Sort;
	offset: number;
	paged: boolean;
	unpaged: boolean;
}

interface Response {
	content: HouseInfo[];
	pageable: Pageable;
	last: boolean;
	totalPages: number;
	totalElements: number;
	first: boolean;
	size: number;
	number: number;
	sort: Sort;
	numberOfElements: number;
	empty: boolean;
}

interface Images {
	filePath: string;
	getPath: string;
	id: number;
	main: boolean;
	name: string;
	src: string;
	type: string;
}

export interface HouseInfo {
	price: number;
	information: Information;
	customers: any[];
	images: Images[];
	src: string;
	name: string;
	description: string;
	id: number;
}

export interface customPage<T> {
	content: T[];
	pageable: {
		pageNumber: number;
		pageSize: number;
		totalPages: number;
	};
}

export interface RootObject {
	recordCount: number;
	response: Response;
}
