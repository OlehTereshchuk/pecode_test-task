import { createSelector } from 'reselect';

export const selectCharacters = state => state.characters;
export const selectCharactersInfo = createSelector(
  selectCharacters,
  characters => characters.info || {}
);
export const selectCharactersData = createSelector(
  selectCharacters,
  characters => characters.items || []
);
export const selectActiveCharacterId = createSelector(
  selectCharacters,
  characters => characters.activeCharacterId || null
);
export const selectActiveCharacter = createSelector(
  selectCharactersData,
  selectActiveCharacterId,
  (items, activeId) => items.find(item => item.id === activeId) || {}
);