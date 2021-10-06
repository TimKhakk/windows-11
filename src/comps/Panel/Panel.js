import { useAppContext } from '../../Context/AppContext';
import './Panel.css';

function Panel() {
	const { runningApps, handleApp } = useAppContext();

	const explorer = runningApps?.find(app => app.id === 'explorer');
	const win = runningApps?.find(app => app.id === 'win');
	console.log('app is ', explorer);

	return (
		<section className='panel'>
			<button
				onClick={() => handleApp('win')}
				className={`icon-wrapper ${win ? 'opened' : ''} ${explorer?.isHidden ? 'hidden' : ''}`}
				id='win-btn'
			>
				<svg>
					<use href='icons/icons.svg#win'></use>
				</svg>
			</button>

			<button
				onClick={() => handleApp('explorer')}
				className={`icon-wrapper ${explorer ? 'opened' : ''} ${
					explorer?.isHidden ? 'hidden' : ''
				}`}
				id='explorer-btn'
			>
				<img src='images/explorer.svg' alt='logo' />
				<span className={`status`}></span>
			</button>
		</section>
	);
}

export default Panel;
