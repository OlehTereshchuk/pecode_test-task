import { createSelector } from 'reselect';

export const selectLocations = state => state.locations;
export const selectLocationsInfo = createSelector(
  selectLocations,
  locations => locations.info || {}
);
export const selectLocationsData = createSelector(
  selectLocations,
  locations => locations.items || []
);
