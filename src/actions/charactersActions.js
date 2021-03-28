import * as actionTypes from './actionTypes';

export const setCharacters = (characters) => ({
  type: actionTypes.SET_CHARACTERS,
  characters
})

export const setActiveCharacter = (id) => ({
  type: actionTypes.SET_ACTIVE_CHARACTER,
  id
})

export const getCharacters = (url) => async(dispatch) => {
  const characters = await fetch(url).then(res => res.json());
  dispatch(setCharacters(characters));
};