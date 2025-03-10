import React, { FC } from 'react';
import AlbumItem from './AlbumItem';

interface IAlbumListProps {}

interface IAlbumList extends FC<IAlbumListProps> {}

const AlbumList: IAlbumList = () => {
  return (
    <>
      <AlbumItem imgSrc="" title="Animals" itemCount={10} />
      <AlbumItem imgSrc="" title="Animals" itemCount={10} />
    </>
  );
};

export default AlbumList;
