import React, { ReactElement } from 'react';
import TabButton from './TabButton';

interface ITabs {
  (): ReactElement;
}

const Tabs: ITabs = () => {
  return (
    <>
      <TabButton label="All" />
      <TabButton label="My albums" />
      <TabButton label="Shared with me" />
    </>
  );
};

export default Tabs;
