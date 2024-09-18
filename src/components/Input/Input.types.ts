import { Location, Unit } from '@/types';

export type InputProps = {
	isLoading: boolean;
	isLocationLoading: boolean;
	unit: Unit;
	onSubmit: (value: string) => void;
	fetchLocation: () => void;
	onUnitChange: (unit: Unit) => void;
};
