import { Location } from '@/types';
import { useCallback, useMemo, useState } from 'react';

export const useLocation = () => {
	const [data, setData] = useState<null | Location>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const fetch = useCallback(() => {
		if (!navigator.geolocation) return setError('Your browser does not support fetching your location');
		setError(null);
		setIsLoading(true);
		navigator.geolocation.getCurrentPosition(
			(position) => {
				setError(null);
				setData({ lat: position.coords.latitude, lon: position.coords.longitude });
				setIsLoading(false);
			},
			(error) => {
				setError('Cannot fetch location');
				setData(null);
				setIsLoading(false);
			}
		);
	}, []);

	return useMemo(() => ({ fetch, isLoading, data, error }), [fetch, isLoading, data, error]);
};
