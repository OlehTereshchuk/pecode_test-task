import React from 'react';
import './index.scss';
import CustomPagination from '../../../components/CustomPagination';
import LocationsFilter from './LocationsFilter';

const LocationsList = ({items, changePage, info, activePage, filters, setFilters}) => {
  return (
    <div className="locations">
      <LocationsFilter filters={filters} setFilters={setFilters} />
      {items.length !== 0 ? <div className="locations__list">
        {items.map(item => (
          <div key={item.id} className="locations__item">
            <div className="locations__number">{item.id}</div>
            <h2 className="locations__name">{item.name}</h2>
            <div className="locations__info">
              <p className="locations__text">Dimension: <span>{item.dimension}</span></p>
              <p className="locations__text">Type:  <span>{item.type}</span></p>
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

export default LocationsList;