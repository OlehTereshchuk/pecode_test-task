import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {selectLocationsData, selectLocationsInfo} from '../../selectors/locations';
import {getLocations} from '../../actions/locationsActions';
import {endpoints} from '../../endpoints';
import LocationsList from './components/LocationsList';
import {encodeQueryData} from '../../utils';

const LocationsPage = ({getLocations, items, info}) => {
  const [filters, setFilters] = useState({
    page: 1,
    name: '',
    type: '',
    dimension: '',
  });

  const changePage = (page) => {
    setFilters({...filters, page});
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const queryString = encodeQueryData(filters);
    getLocations(endpoints.locations + queryString);
  }, [getLocations, filters]);

  return (
    <div className="page">
      <LocationsList items={items} info={info} activePage={filters.page} changePage={changePage} filters={filters} setFilters={setFilters} />
    </div>
  )
};

const mapStateToProps = (state) => ({
  info: selectLocationsInfo(state),
  items: selectLocationsData(state),
});

const mapMethodsToProps = {
  getLocations,
}

export default connect(mapStateToProps, mapMethodsToProps)(LocationsPage);