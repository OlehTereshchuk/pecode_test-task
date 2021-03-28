import React from 'react';
import WatchItem from './WatchItem';

const WatchList = ({ watchlist }) => (
  <ul className="todo-list">
    {watchlist.map(({ title, id, completed }) => (
      <WatchItem
        title={title}
        id={id}
        key={id}
        completed={completed}
      />
    ))}
  </ul>
);

export default WatchList;
