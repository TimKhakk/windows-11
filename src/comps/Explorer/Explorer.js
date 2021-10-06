import { useAppContext } from '../../Context/AppContext';
import './Explorer.css';

function Explorer() {
	const { runningApps, closeApp, hideApp } = useAppContext();

	const explorer = runningApps?.find(app => app.id === 'explorer');

	return (
		<div
			className={`explorer ${explorer ? 'opened' : ''} ${explorer?.isHidden ? 'hidden' : ''}`}
		>
			<div className='explorer__header'>
				<div className='explorer__title'>
					<img className='title__logo' src='images/explorer.svg' alt='logo' />
					<p className='title__text'>File Explorer</p>
				</div>
				<div className='explorer__buttons'>
					<button onClick={() => hideApp(explorer.id)} className='hide-btn'>
						<svg width='24' height='24'>
							<use href='icons/icons.svg#hide'></use>
						</svg>
					</button>
					<button className='full-btn'>
						<svg width='24' height='24'>
							<use href='icons/icons.svg#full'></use>
						</svg>
					</button>
					<button onClick={() => closeApp(explorer.id)} className='close-btn'>
						<svg width='24' height='24'>
							<use href='icons/icons.svg#close'></use>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Explorer;
