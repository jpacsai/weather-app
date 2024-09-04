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
