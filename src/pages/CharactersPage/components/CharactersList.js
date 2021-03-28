import React from 'react';
import './index.scss';
import CharactersItem from './CharactersItem';
import CustomPagination from '../../../components/CustomPagination';

const CharactersList = ({items, setActiveCharacter, info, changePage, activePage}) => {
  return (
    <div className="list">
      {items.map(item => (
        <CharactersItem key={item.id} item={item} onClick={setActiveCharacter} />
      ))}
      {items.length === 0 && (
        <div className="list__empty">
          <h1>No items found</h1>
        </div>
      )}
      <CustomPagination pages={info.pages} changePage={changePage} activePage={activePage} />
    </div>
  )
};

export default CharactersList;