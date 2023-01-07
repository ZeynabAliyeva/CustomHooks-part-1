import React, { useState } from 'react';
import UseInterval from '../Hooks/UseInterval';

function Interval() {
	const [count, setCount] = useState(0);
	const [delay, setDelay] = useState(2000);
	const [isPlaying, setPlaying] = useState(false);

	UseInterval(
		() => {
			setCount(count + 1);
		},
		isPlaying ? delay : null || undefined
	);

	const handleChange = (event) => {
		setDelay(Number(event.target.value));
	};

	return (
		<>
			<h1>{count}</h1>
			<button onClick={() => setPlaying(!isPlaying)}>{isPlaying ? 'pause' : 'play'}</button>
			<p>
				<label htmlFor="delay">Delay: </label>
				<input type="number" name="delay" onChange={handleChange} value={delay} />
			</p>
		</>
	);
}

export default Interval;