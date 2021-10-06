import { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }) => {
	const [isWinOpen, setIsWinOpen] = useState(false);

	const [runningApps, setApps] = useState([]);

	const openApp = id => {
		console.log('openApp');
		setApps(prev => [...prev, { id, isFocused: true, isHidden: false }]);
	};

	const closeApp = id => {
		console.log('closeApp');
		setApps(prev => prev.filter(item => item.id !== id));
	};

	const focusApp = id => {
		console.log('focusApp');
		setApps(prev =>
			prev.map(item =>
				item.id === id ? { ...item, isFocused: true } : { ...item, isFocused: false }
			)
		);
	};

	const hideApp = id => {
		console.log('hideApp');
		setApps(prev => prev.map(item => (item.id === id ? { ...item, isHidden: true } : item)));
	};

	const showApp = id => {
		console.log('showApp');
		setApps(prev => prev.map(item => (item.id === id ? { ...item, isHidden: false } : item)));
	};

	const handleApp = id => {
		if (!runningApps.find(item => item.id === id)) {
			// Если закрыто
			openApp(id);
		} else {
			if (runningApps.find(item => item.id === id && item.isHidden === true)) {
				showApp(id);
			} else {
				//Если открыто
				hideApp(id);
			}
		}
	};

	const value = { runningApps, handleApp, closeApp, hideApp };

	useEffect(() => {
		console.dir(runningApps);
	}, [runningApps]);

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
