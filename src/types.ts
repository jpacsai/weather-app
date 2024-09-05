import { AxiosError } from 'axios';

export type WeatherData = {
	localTime: Date;
	cityName: string;
	temperature: string;
	description: string;
	icon: string;
	humidity: string;
	windSpeed: string;
};

export type Unit = 'metric' | 'imperial';

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
