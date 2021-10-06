import { useAppContext } from '../../Context/AppContext';

import './Win.css';

function Win() {
	const { isWinOpen, focusedApp } = useAppContext();

	return (
		<>
			<div
				className={`win ${!isWinOpen ? 'hidden' : ''} ${
					focusedApp === 'Win' ? 'focused' : ''
				}`}
			>
				<div className='win__body'>
					<div className='win__section'>
						Pinned
						<button className='sort-menu'>All runningApps</button>
					</div>

					<div className='win__app-menu'>
						<button className='app-link'>
							<img alt='/' src='images/chrome.png' />
							<span className='app-title'>Chrome</span>
						</button>
						<a className='app-link' href='/'>
							<img alt='/' src='images/edge.svg' />
							<span className='app-title'>Microsoft Edge</span>
						</a>
						<a className='app-link' href='/'>
							<img alt='/' src='images/GitHub.svg' />
							<span className='app-title'>GitHub</span>
						</a>
						<a className='app-link' href='/'>
							<img alt='/' src='images/linkedin.png' />
							<span className='app-title'>LinkedIn</span>
						</a>
						<a className='app-link' href='/'>
							<img alt='/' src='images/twitter.png' />
							<span className='app-title'>Twitter</span>
						</a>
						<a className='app-link' href='/'>
							<img alt='/' src='images/whatsapp.png' />
							<span className='app-title'>WhatsApp</span>
						</a>
						<a className='app-link' href='/'>
							<img alt='/' src='images/yandex-mail.png' />
							<span className='app-title'>Yandex mail</span>
						</a>
						<a className='app-link' href='/'>
							<img alt='/' src='images/telegram.png' />
							<span className='app-title'>Telegram</span>
						</a>
					</div>

					<div className='win__section'>Recommended</div>
				</div>
				<div className='bottom-panel'>
					<a href='/' className='win__user'>
						<div className='user__img-wrapper'>
							<img alt='/' src='images/user-line.svg' />
						</div>

						<span>Timur Khakkiev</span>
					</a>
					<img alt='/' className='shut-down-icon' src='images/shut-down.svg' />
				</div>
			</div>
		</>
	);
}

export default Win;
