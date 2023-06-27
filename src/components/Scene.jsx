import Spline from '@splinetool/react-spline';
import { useRef } from 'react';

export const Scene = ({ setLoading }) => {
	const spline = useRef();

	function onLoad(splineApp) {
		spline.current = splineApp;
		setLoading(false);
	}

	function triggerAnimation() {
		spline.current.emitEvent(
			'mousehover',
			'1da5cdca-f395-4979-b26f-924afa36244e'
		);
	}

	return (
		<>
			<Spline
				scene='https://prod.spline.design/xCjdLfrMZQtRWDzA/scene.splinecode'
				onLoad={onLoad}
			/>
			<button onClick={triggerAnimation}>Animation</button>
		</>
	);
};
