import React from 'react';
import './index.scss';
import {HashRouter} from 'react-router-dom';
import NavigationPanel from './components/NavigationPanel';
import useRoutes from './routes';

function App() {
  const routes = useRoutes();
  return (
    <HashRouter>
      <NavigationPanel />
      {routes}
    </HashRouter>
  );
}

export default App;
