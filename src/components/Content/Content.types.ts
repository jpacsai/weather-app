import { Unit, WeatherData } from '@/types';

export type ContentProps = {
	weather: WeatherData | null;
	unit: Unit;
	isLoading: boolean;
};
