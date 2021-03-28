import * as actionTypes from '../actions/actionTypes';

const initialState = {
  info: {},
  items: [],
}

const episodesReducer = (state=initialState, action) => {
  switch(action.type) {
    case actionTypes.SET_EPISODES: 
      return {
        ...state,
        info: action.episodes.info,
        items: action.episodes.results
    }
    default: 
      return state;
  }
};

export default episodesReducer;