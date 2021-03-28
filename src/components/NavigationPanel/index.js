import React from 'react';
import './index.scss';
import Tab from '../../ui/Tab';

const NavigationPanel = () => {

  return (
    <div className="navigation">
      <Tab title="Characters" path="/characters" />
      <Tab title="Episodes" path="/episodes" />
      <Tab title="Locations" path="/locations" />
      <Tab title="My watch list" path="/list" />
    </div>
  );
};

export default NavigationPanel;