import React from 'react';
import './index.scss';
import {BrowserRouter} from 'react-router-dom';
import NavigationPanel from './components/NavigationPanel';
import useRoutes from './routes';

function App() {
  const routes = useRoutes();
  return (
    <BrowserRouter>
      <NavigationPanel />
      {routes}
    </BrowserRouter>
  );
}

export default App;
