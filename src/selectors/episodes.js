import { createSelector } from 'reselect';

export const selectEpisodes = state => state.episodes;
export const selectEpisodesInfo = createSelector(
  selectEpisodes,
  episodes => episodes.info || {}
);
export const selectEpisodesData = createSelector(
  selectEpisodes,
  episodes => episodes.items || []
);
