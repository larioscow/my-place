import { PlaygroundLoader } from './PlaygroundLoader';
import { useState } from 'react';
import { Scene } from './Scene';

export const PlayGround = () => {
	const [loading, setLoading] = useState(true);

	return (
		<>
			<Scene setLoading={setLoading} />
			<PlaygroundLoader loading={loading} />
		</>
	);
};
