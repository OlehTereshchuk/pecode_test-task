import React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import {
  deleteWatchItem, toggleComplete
} from '../../../actions/watchlistActions';

const WatchItem = ({
  title, id, completed, deleteWatchItem, toggleComplete
}) => {
  return (
    <li className={cn({
      completed,
    })}
    >
      <div className="view">
        <input
          type="checkbox"
          className="toggle"
          id={id}
          checked={completed}
          onChange={() => toggleComplete(id)}
        />
        <label htmlFor={id}>{title}</label>
        <button
          type="button"
          className="destroy"
          onClick={() => deleteWatchItem(id)}
        />
      </div>
    </li>
  );
};

const mapMethodsToProps = {
  deleteWatchItem,
  toggleComplete
};

export default connect(null, mapMethodsToProps)(WatchItem);
