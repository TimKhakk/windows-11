import { useAppContext } from '../../Context/AppContext';
import './Panel.css';

function Panel() {
	const { runningApps, handleApp } = useAppContext();

	const explorer = runningApps?.find(app => app.id === 'explorer');
	const win = runningApps?.find(app => app.id === 'win');

	return (
		<section className='panel'>
			<button
				onClick={() => handleApp('win')}
				className={`icon-wrapper ${win ? 'opened' : ''} ${win?.isFocused ? 'focused' : ''} ${
					win?.isHidden ? 'hidden' : ''
				}`}
				id='win-btn'
			>
				<svg>
					<use href='icons/icons.svg#win'></use>
				</svg>
			</button>

			<button
				onClick={() => handleApp('explorer')}
				className={`icon-wrapper ${explorer ? 'opened' : ''} ${
					explorer?.isFocused ? 'focused' : ''
				} ${explorer?.isHidden ? 'hidden' : ''}`}
				id='explorer-btn'
			>
				<img src='images/explorer.svg' alt='logo' />
				<span className={`status`}></span>
			</button>

			{runningApps.map(app => {
				if (app.id !== 'win' && app.id !== 'explorer') {
					return (
						<button
							onClick={() => handleApp(app.id)}
							className={`icon-wrapper ${app ? 'opened' : ''} ${
								app?.isFocused ? 'focused' : ''
							} ${app?.isHidden ? 'hidden' : ''}`}
						>
							<img src={`images/${app.id}.png`} alt='logo' />
							<span className={`status`}></span>
						</button>
					);
				}
				return '';
			})}
		</section>
	);
}

export default Panel;
