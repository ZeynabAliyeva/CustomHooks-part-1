import { useEffect, useLayoutEffect, useRef } from 'react';

function UseInterval(callback, delay) {
	const savedCallback = useRef(callback);

	useLayoutEffect(() => {
		savedCallback.current = callback;
	}, [callback]);

	useEffect(() => {
		if (!delay && delay !== 0) {
			return;
		}

		const id = setInterval(() => savedCallback.current(), delay);

		return () => clearInterval(id);
	}, [delay]);
}

export default UseInterval;