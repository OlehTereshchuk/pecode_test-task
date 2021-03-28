import * as actionTypes from '../actions/actionTypes';

const initialState = {
  info: {},
  items: [],
}

const locationsReducer = (state=initialState, action) => {
  switch(action.type) {
    case actionTypes.SET_LOCATIONS: 
      return {
        ...state,
        info: action.locations.info,
        items: action.locations.results
    }
    default: 
      return state;
  }
};

export default locationsReducer;