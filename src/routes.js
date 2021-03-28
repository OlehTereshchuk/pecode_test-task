import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import CharactersPage from './pages/CharactersPage';
import EpisodesPage from './pages/EpisodesPage';
import LocationsPage from './pages/LocationsPage';
import ListPage from './pages/ListPage';

const useRoutes = () => {
  return (
    <Switch>
        <Route path="/" component={CharactersPage} />
        <Route path="/episodes" component={EpisodesPage} />
        <Route path="/locations" component={LocationsPage} />
        <Route path="/list" component={ListPage} />

        <Redirect to="/" />
    </Switch>
  );
}

export default useRoutes;