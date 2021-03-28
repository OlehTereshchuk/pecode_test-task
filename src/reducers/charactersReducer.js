import * as actionTypes from '../actions/actionTypes';

const initialState = {
  info: {},
  items: [],
  activeCharacterId: null
}
const charactersReducer = (state=initialState, action) => {
  switch(action.type) {
    case actionTypes.SET_CHARACTERS: 
      return {
        ...state,
        info: action.characters.info,
        items: action.characters.results
    }
    case actionTypes.SET_ACTIVE_CHARACTER: {
      return {
        ...state,
        activeCharacterId: action.id
      }
    }
    default: 
      return state;
  }
};

export default charactersReducer;