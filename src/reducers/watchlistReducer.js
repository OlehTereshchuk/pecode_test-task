import * as actionTypes from '../actions/actionTypes';

const watchlistReducer = (watchlist=[], action) => {
  switch(action.type) {
    case actionTypes.SET_WATCHLIST:
      return action.watchlist;
    case actionTypes.ADD_WATCHITEM:
      return [...watchlist, action.watchItem];
    case actionTypes.DELETE_WATCHITEM:
      return watchlist.filter(({ id }) => id !== action.watchItemId);
    case actionTypes.TOGGLE_COMPLETE:
      return watchlist.map((watchItem) => {
        if (watchItem.id === action.watchItemId) {
          return {
            ...watchItem, completed: !watchItem.completed,
          };
        }

        return watchItem;
      });
    default: 
      return watchlist;
  }
};

export default watchlistReducer;