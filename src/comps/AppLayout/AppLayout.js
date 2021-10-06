function AppLayout({ app, appName, children }) {
	return (
		<div className={`app ${app ? 'opened' : ''} ${app === appName ? 'focused' : ''}`}>
			appName
			{children}
		</div>
	);
}

export default AppLayout;
