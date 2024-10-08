import { AxiosErrorWeather, MultiUnit, Unit, WeatherData } from '@/types';
import axios from 'axios';
import { useCallback, useMemo, useState } from 'react';

const key = 'b348f0df35504d608ef82554241809';

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
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	const fetch = useCallback(async (q: string) => {
		setError(null);
		setIsLoading(true);
		const { data: response } = await axios
			.get<ApiResponse>('http://api.weatherapi.com/v1/current.json', { params: { q, key } })
			.catch((error: AxiosErrorWeather) => {
				const errorMessage = error.response.data.error.message;
				setError(errorMessage);
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
			temperature: {
				imperial: response.current.temp_f.toFixed(1) + ' °F',
				metric: response.current.temp_c.toFixed(1) + ' °C'
			},
			description: response.current.condition.text,
			icon: response.current.condition.icon,
			humidity: response.current.humidity + '%',
			windSpeed: {
				imperial: response.current.wind_mph.toFixed(1) + ' mph',
				metric: response.current.wind_kph + ' km/h'
			}
		});
	}, []);

	return useMemo(() => ({ fetch, isLoading, data, error }), [fetch, isLoading, data, error]);
};
