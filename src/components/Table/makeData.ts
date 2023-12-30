import { faker } from "@faker-js/faker";

export type Person = {
	firstName: string;
	lastName: string;
	project: string;
	email: string;
	phone: string;
	priority: true | false;
};

const range = (len: number) => {
	const arr = [];
	for (let i = 0; i < len; i++) {
		arr.push(i);
	}
	return arr;
};

const newPerson = (): Person => {
	return {
		firstName: faker.person.firstName(),
		lastName: faker.person.lastName(),
		email: faker.location.cardinalDirection(),
		phone: faker.phone.number(),
		project: faker.company.name(),
		priority: faker.helpers.shuffle<Person["priority"]>([true, false])[0],
	};
};

export function makeData(...lens: number[]) {
	const makeDataLevel = (depth = 0): Person[] => {
		const len = lens[depth]!;
		return range(len).map((d): Person => {
			return {
				...newPerson(),
				subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
			};
		});
	};

	return makeDataLevel();
}

export async function fetchData(options: {
	pageIndex: number;
	pageSize: number;
	data: Person[];
}) {
	// Simulate some network latency
	await new Promise((r) => setTimeout(r, 500));

	return {
		rows: options.data.slice(
			options.pageIndex * options.pageSize,
			(options.pageIndex + 1) * options.pageSize
		),
		pageCount: Math.ceil(options.data.length / options.pageSize),
	};
}
