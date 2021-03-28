import React from 'react';
import './index.scss';
import CustomPagination from '../../../components/CustomPagination';
import EpisodesFilter from './EpisodesFilter';

const EpisodesList = ({items, changePage, info, activePage, filters, setFilters}) => {
  return (
    <div className="episodes">
      <EpisodesFilter filters={filters} setFilters={setFilters} />
      {items.length !== 0 ? <div className="episodes__list">
        {items.map(item => (
          <div key={item.id} className="episodes__item">
            <div className="episodes__number">{item.id}</div>
            <h2 className="episodes__name">{item.name}</h2>
            <div className="episodes__info">
              <span>{item.episode}</span>
              <span>{item.air_date}</span>
            </div>
          </div>
        ))}
      </div>
     : (
        <div className="list__empty">
          <h1>No items found</h1>
        </div>
      )}
      <CustomPagination pages={info.pages} changePage={changePage} activePage={activePage} />
    </div>
  );
};

export default EpisodesList;