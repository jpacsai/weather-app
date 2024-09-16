import { Unit } from '@/types';

export type InputProps = {
	isLoading: boolean;
	unit: Unit;
	onSubmit: (value: string, unit: Unit) => void;
	onUnitChange: (unit: Unit) => void;
};
