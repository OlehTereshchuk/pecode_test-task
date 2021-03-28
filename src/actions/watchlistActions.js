import * as actionTypes from './actionTypes';

export const setWatchlist = (watchlist) => ({
  type: actionTypes.SET_WATCHLIST,
  watchlist
})

export const addWatchItem = (watchItem) => ({
  type: actionTypes.ADD_WATCHITEM,
  watchItem,
});

export const deleteWatchItem = (watchItemId) => ({
  type: actionTypes.DELETE_WATCHITEM,
  watchItemId,
});

export const toggleComplete = (watchItemId) => ({
  type: actionTypes.TOGGLE_COMPLETE,
  watchItemId,
});

export const getWatchlist = () => (dispatch) => {
    const data = localStorage.getItem('watch-list');

    if (data) {
      dispatch(setWatchlist(JSON.parse(data)));
    }
};