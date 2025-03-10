import React, { ReactElement, FC, useState } from 'react';
import IconButton from './IconButton';

interface IHeaderProps {
  label: string;
}

interface IHeader extends FC<IHeaderProps> {}

const Header: IHeader = () => {
  const [strHeader, setHeader] = useState('Albums');

  const handleCreateAlbum = () => {};

  const handleMostRecentPhoto = () => {};

  return (
    <div className="topHeader">
      <h2>{strHeader}</h2>
      <div className="headerMenu">
        <IconButton icon="x" label="Create album" onClick={handleCreateAlbum} />
        <IconButton
          icon="y"
          label="Most recent photo"
          onClick={handleMostRecentPhoto}
        />
      </div>
    </div>
  );
};

export default Header;
