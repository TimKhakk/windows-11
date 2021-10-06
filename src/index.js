import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AppContextProvider } from './Context/AppContext';

const root = document.getElementById('root');

ReactDOM.render(
	<StrictMode>
		<AppContextProvider>
			<App />
		</AppContextProvider>
	</StrictMode>,
	root
);
