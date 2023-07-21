import { faker } from '@faker-js/faker';
import { CITIES, OFFER_TYPES } from '../constants';

interface ILocation {
	latitude: number;
	longitude: number;
	zoom: number;
}

export interface IOffer {
	id: string;
	title: string;
	type: string;
	price: number;
	city: {
		name: string;
		location: ILocation;
	};
	location: ILocation;
	isFavorite: boolean;
	isPremium: boolean;
	rating: number;
	previewImage: string;
}

function mockLocation(): ILocation {
	return {
		latitude: faker.location.latitude(),
		longitude: faker.location.longitude(),
		zoom: faker.number.int({ min: 1, max: 10 }),
	};
}

function mockOffer(): IOffer {
	return {
		id: crypto.randomUUID(),
		title: faker.location.streetAddress(),
		type: faker.helpers.arrayElement(OFFER_TYPES),
		price: faker.number.int({ min: 100, max: 1000 }),
		city: {
			name: faker.helpers.arrayElement(CITIES),
			location: mockLocation(),
		},
		location: mockLocation(),
		isFavorite: faker.datatype.boolean(),
		isPremium: faker.datatype.boolean(),
		rating: faker.number.int({ min: 0, max: 5 }),
		previewImage: faker.image.urlLoremFlickr({ category: 'appartment' }),
	};
}

export default mockOffer;
