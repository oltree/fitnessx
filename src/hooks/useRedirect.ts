import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useRedirect = (redirect: boolean, link: string, delay: number) => {
	const navigate = useNavigate();

	useEffect(() => {
		if (redirect) {
			const timeout = setTimeout(() => {
				navigate(link);
			}, delay);

			return () => clearTimeout(timeout);
		}
	}, [redirect, navigate, link, delay]);
};
