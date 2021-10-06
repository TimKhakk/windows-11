import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }) => {
	const [runningApps, setApps] = useState([]);

	const closeWin = () => {
		setApps(prev => prev.filter(item => item.id !== 'win'));
	};

	const hideAllApps = () => {
		closeWin();
		setApps(prev =>
			prev.map(item => {
				return { ...item, isFocused: false };
			})
		);
	};

	const unFocusAllApps = () => {
		setApps(prev =>
			prev.map(app => {
				return { ...app, isFocused: false };
			})
		);
	};

	const openApp = id => {
		hideAllApps();

		setApps(prev => [...prev, { id, isFocused: true, isHidden: false }]);
	};

	const closeApp = id => {
		setApps(prev => prev.filter(item => item.id !== id));
	};

	const focusApp = id => {
		closeWin();
		setApps(prev =>
			prev.map(item =>
				item.id === id ? { ...item, isFocused: true } : { ...item, isFocused: false }
			)
		);
	};

	const hideApp = id => {
		unFocusAllApps();
		setApps(prev => prev.map(item => (item.id === id ? { ...item, isHidden: true } : item)));
	};

	const showApp = id => {
		focusApp(id);
		setApps(prev => prev.map(item => (item.id === id ? { ...item, isHidden: false } : item)));
	};

	const handleApp = id => {
		unFocusAllApps();
		closeWin();
		if (!runningApps.find(item => item.id === id)) {
			// Если закрыто
			openApp(id);
		} else {
			if (
				runningApps.find(
					item => (item.id === id && item.isHidden === true) || item.isFocused === false
				)
			) {
				showApp(id);
			} else {
				//Если открыто
				hideApp(id);
			}
		}
	};

	const value = { runningApps, handleApp, closeApp, hideApp, focusApp };

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
