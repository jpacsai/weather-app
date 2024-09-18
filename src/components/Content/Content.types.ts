import { Location, Unit, WeatherData } from '@/types';

export type ContentProps = {
	weather: WeatherData | null;
	unit: Unit;
	isLoading: boolean;
	isLocationLoading: boolean;
};
