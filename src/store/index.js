import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import charactersReducer from '../reducers/charactersReducer';
import episodesReducer from '../reducers/episodesReduces';
import locationsReducer from '../reducers/locationsReducer';
import watchlistReducer from '../reducers/watchlistReducer';

const rootReducer = combineReducers({
  characters: charactersReducer,
  episodes: episodesReducer,
  locations: locationsReducer,
  watchlist: watchlistReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;