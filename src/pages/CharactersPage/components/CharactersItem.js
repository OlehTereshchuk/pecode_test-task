import React from 'react'
import {characterStatus} from '../../../enums/index';

const CharactersItem = ({item, onClick}) => {
  return (
    <div className="list__item" onClick={() => onClick(item.id)}>
      <div className="item__image" style={{backgroundImage: `url(${item.image})`}}></div>
      <div className="item__content">
        <h2 className="item__name">{item.name}</h2>
        <div className="item__info">
          <div className="item__indicator" style={{backgroundColor: characterStatus[item.status]}}></div>
          <span className="item__status">{item.status} - {item.species}</span>
        </div>
      </div>
    </div>
  );
};

export default CharactersItem;