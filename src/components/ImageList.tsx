import React, { ReactElement, FC } from 'react';
import { render } from 'react-dom';
import Image from './Image';

interface IImageListProps {}

interface IImageList extends FC<IImageListProps> {}

const ImageList: IImageList = () => {
  return <Image />;
};

export default ImageList;
