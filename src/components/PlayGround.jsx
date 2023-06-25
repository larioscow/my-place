import Spline from '@splinetool/react-spline';
import { PlaygroundLoader } from './PlaygroundLoader';
import { useState } from 'react';

export const PlayGround = () => {
	const [loading, setLoading] = useState(true);
	let stage = 0;

	return (
		<>
			<Spline
				scene='https://prod.spline.design/zHofCWkJjQ8HeRLo/scene.splinecode'
				onLoad={() => {
					if (stage === 0) {
						stage++;
					} else {
						setLoading(false);
					}
				}}
			/>
			<PlaygroundLoader loading={loading} />
		</>
	);
};
