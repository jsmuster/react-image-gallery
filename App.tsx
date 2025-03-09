import React from 'react';
import Header from './components/Header';
import Tabs from './components/Tabs';
import ImageList from './components/ImageList';
import AlbumList from './components/AlbumList';

export const App = () => {
  return (
    <>
      <Header />
      <Tabs />
      <AlbumList />
    </>
  );
};
