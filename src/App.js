import Panel from './comps/Panel/Panel';
import Win from './comps/Win/Win';
import Explorer from './comps/Explorer/Explorer';
import { useAppContext } from './Context/AppContext';
import AppLayout from './comps/AppLayout/AppLayout';

function App() {
	const { runningApps } = useAppContext();
	return (
		<>
			<Panel />
			<Win />
			<Explorer />

			{runningApps.map(app => {
				if (app.id !== 'win' && app.id !== 'explorer') {
					return (
						<AppLayout app={app}>
							<iframe
								src='https://amazing-archimedes-971a5a.netlify.app/'
								title='chrome'
							></iframe>
						</AppLayout>
					);
				}
				return '';
			})}
		</>
	);
}

export default App;
