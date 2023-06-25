import { BarLoader } from 'react-spinners';

export const PlaygroundLoader = ({ loading }) => {
	const override = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		minwidth: '100px',
		width: '10%',
	};
	return <BarLoader color='black' cssOverride={override} loading={loading} />;
};
