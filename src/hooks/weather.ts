import { Unit, WeatherData } from '@/types';
import axios, { AxiosError } from 'axios';
import { useCallback, useMemo, useState } from 'react';

const key = '2f69cc6a582d4d8fb00205327240409';

type ApiResponse = {
	location: {
		name: string;
		localtime: string;
	};
	current: {
		temp_c: number;
		temp_f: number;
		wind_kph: number;
		wind_mph: number;
		humidity: number;
		condition: {
			text: string;
			icon: string;
		};
	};
};

export const useWeatherData = () => {
	const [data, setData] = useState<WeatherData | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const fetch = useCallback(async (q: string, unit: Unit = 'metric') => {
		setError(null);
		setIsLoading(true);
		const { data: response } = await axios
			.get<ApiResponse>('http://api.weatherapi.com/v1/current.json', { params: { q, key } })
			.catch((error: AxiosError) => {
				// TODO: accurate error handling
				setError('Cannot fetch weather data');
				return { data: null };
			})
			.finally(() => setIsLoading(false));

		if (!response) {
			return setData(null);
		}

		setError(null);
		setData({
			localTime: new Date(response.location.localtime),
			cityName: response.location.name,
			temperature:
				unit === 'metric' ? response.current.temp_c.toFixed(1) + ' °C' : response.current.temp_f.toFixed(1) + ' °F',
			description: response.current.condition.text,
			icon: response.current.condition.icon,
			humidity: response.current.humidity + '%',
			windSpeed: unit === 'metric' ? response.current.wind_kph + ' km/h' : response.current.wind_mph.toFixed(1) + ' mph'
		});
	}, []);

	return useMemo(() => ({ fetch, isLoading, data, error }), [fetch, isLoading, data, error]);
};
