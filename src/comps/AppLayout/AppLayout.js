import './AppLayout.css';
import { useAppContext } from '../../Context/AppContext';

function AppLayout({ app, children }) {
	const { closeApp, hideApp, focusApp } = useAppContext();

	// const app = runningApps?.find(app => app.id === id);

	return (
		<div
			onClick={() => focusApp(app.id)}
			className={`app ${app ? 'opened' : ''} ${app?.isFocused ? 'focused' : ''} ${
				app?.isHidden ? 'hidden' : ''
			}`}
		>
			<div className='app__header'>
				<div className='app__title'>
					{/* <img className='title__logo' src='images/app.svg' alt='logo' /> */}
					<p className='title__text'>{app.id}</p>
				</div>
				<div className='app__buttons'>
					<button onClick={() => hideApp(app.id)} className='hide-btn'>
						<svg width='24' height='24'>
							<use href='icons/icons.svg#hide'></use>
						</svg>
					</button>
					<button className='full-btn'>
						<svg width='24' height='24'>
							<use href='icons/icons.svg#full'></use>
						</svg>
					</button>
					<button onClick={() => closeApp(app.id)} className='close-btn'>
						<svg width='24' height='24'>
							<use href='icons/icons.svg#close'></use>
						</svg>
					</button>
				</div>
			</div>
			{children}
		</div>
	);
}

export default AppLayout;
