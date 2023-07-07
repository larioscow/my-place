import Spline from '@splinetool/react-spline';
// import { useRef, useState } from 'react';

export const Scene = ({ setLoading }) => {
	// const spline = useRef();
	// const [height, setHeight] = useState(0);
	// const [width, setWidth] = useState(0);
	// const [orientation, setOrientation] = useState();

	function onLoad(splineApp) {
		// spline.current = splineApp;
		// setHeight(spline.current._viewportHeight);
		// setWidth(spline.current._viewportWidth);
		// const orientation = width > height ? 'horizontal' : 'vertical';
		// setOrientation(orientation);
		setLoading(false);
	}

	return (
		<>
			<Spline
				scene='https://prod.spline.design/xCjdLfrMZQtRWDzA/scene.splinecode'
				onLoad={onLoad}
				onResize={() => console.log()}
			/>
		</>
	);
};
