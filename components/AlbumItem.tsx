import React, { FC } from 'react';

interface IAlbumItemProps {
  imgSrc: string;
  title: string;
  itemCount: number;
}

interface IAlbumItem extends FC<IAlbumItemProps> {}

const AlbumItem: IAlbumItem = ({ imgSrc, title, itemCount }) => {
  return (
    <>
      <div className="album">
        <div className="album__image">
          {imgSrc != null && imgSrc.length > 0 ? (
            <img src={imgSrc} alt={title} className="album__img" />
          ) : (
            <div></div>
          )}
        </div>
        <div className="album__info">
          <h2 className="album__header">{title}</h2>
          <span className="album__itemCount">
            {itemCount > 0 ? itemCount : 0} items
          </span>
        </div>
      </div>
    </>
  );
};

export default AlbumItem;
