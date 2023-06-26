import Spline from '@splinetool/react-spline';
import { PlaygroundLoader } from './PlaygroundLoader';
import { useState } from 'react';

export const PlayGround = () => {
	const [loading, setLoading] = useState(true);

	return (
		<>
			<Spline
				scene='https://prod.spline.design/HaLSHO5V4HMyCSpy/scene.splinecode'
				onLoad={() => {
					setLoading(false);
				}}
			/>
			<PlaygroundLoader loading={loading} />
		</>
	);
};
