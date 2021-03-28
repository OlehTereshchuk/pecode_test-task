import React from 'react';
import './index.scss';
import {NavLink} from 'react-router-dom';

const Tab = ({title, path}) => {
  return (
    <NavLink to={path}>
      <div className="tab">{title}</div>
    </NavLink>
  );
};

export default Tab;