import { AxiosError } from 'axios';

export type WeatherData = {
	localTime: Date;
	cityName: string;
	temperature: MultiUnit;
	description: string;
	icon: string;
	humidity: string;
	windSpeed: MultiUnit;
};

export type MultiUnit = {
	metric: string;
	imperial: string;
};

export type Unit = keyof MultiUnit;

export type Location = { lat: number; lon: number };

export type AxiosErrorWeather = AxiosError & {
	response: {
		data: {
			error: {
				code: number;
				message: string;
			};
		};
	};
};
