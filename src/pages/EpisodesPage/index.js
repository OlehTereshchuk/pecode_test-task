import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {selectEpisodesData, selectEpisodesInfo} from '../../selectors/episodes';
import {getEpisodes} from '../../actions/episodesActions';
import {endpoints} from '../../endpoints';
import EpisodesList from './components/EpisodesList';
import {encodeQueryData} from '../../utils';

const EpisodesPage = ({getEpisodes, items, info}) => {
  const [filters, setFilters] = useState({
    page: 1,
    name: '',
  });

  const changePage = (page) => {
    setFilters({...filters, page});
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const queryString = encodeQueryData(filters);
    getEpisodes(endpoints.episodes + queryString);
  }, [getEpisodes, filters]);

  return (
    <div className="page">
      <EpisodesList items={items} info={info} activePage={filters.page} changePage={changePage} filters={filters} setFilters={setFilters} />
    </div>
  )
};

const mapStateToProps = (state) => ({
  info: selectEpisodesInfo(state),
  items: selectEpisodesData(state),
});

const mapMethodsToProps = {
  getEpisodes,
}

export default connect(mapStateToProps, mapMethodsToProps)(EpisodesPage);