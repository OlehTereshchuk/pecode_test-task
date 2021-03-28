import * as actionTypes from './actionTypes';

export const setLocations = (locations) => ({
  type: actionTypes.SET_LOCATIONS,
  locations
})

export const getLocations = (url) => async(dispatch) => {
  const locations = await fetch(url).then(res => res.json());
  dispatch(setLocations(locations));
};