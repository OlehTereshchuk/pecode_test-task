import * as actionTypes from './actionTypes';

export const setEpisodes = (episodes) => ({
  type: actionTypes.SET_EPISODES,
  episodes
})

export const getEpisodes = (url) => async(dispatch) => {
  const episodes = await fetch(url).then(res => res.json());
  dispatch(setEpisodes(episodes));
};