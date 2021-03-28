import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {endpoints} from '../../endpoints';
import {getCharacters, setActiveCharacter} from '../../actions/charactersActions';
import {selectCharactersInfo, selectCharactersData, selectActiveCharacterId, selectActiveCharacter} from '../../selectors/characters';
import CharactersList from './components/CharactersList';
import CharacterModal from './components/CharacterModal';
import CharactersFilters from './components/CharactersFilters';
import {encodeQueryData} from '../../utils';

const CharactersPage = ({getCharacters, info, items, activeCharacterId, setActiveCharacter, activeCharacter}) => {
  const [filters, setFilters] = useState({
    page: 1,
    status: '',
    species: '',
    gender: '',
  });
  
  const changePage = (page) => {
    setFilters({...filters, page});
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const queryString = encodeQueryData(filters);
    getCharacters(endpoints.characters + queryString);
  }, [getCharacters, filters]);

  return (
    <div className="page">
      <CharactersFilters setFilters={setFilters} filters={filters} />
      <CharacterModal activeCharacter={activeCharacter} isOpened={!!activeCharacterId} onClose={() => setActiveCharacter(null)} />
      <CharactersList items={items} setActiveCharacter={setActiveCharacter} info={info} changePage={changePage} activePage={filters.page} />
    </div>
  )
};

const mapStateToProps = (state) => ({
  info: selectCharactersInfo(state),
  items: selectCharactersData(state),
  activeCharacterId: selectActiveCharacterId(state),
  activeCharacter: selectActiveCharacter(state),
});

const mapMethodsToProps = {
  getCharacters,
  setActiveCharacter,
}
export default connect(mapStateToProps, mapMethodsToProps)(CharactersPage);