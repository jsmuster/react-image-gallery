import React, { FC, ReactNode } from 'react';
import Button from './Button';

interface IIconButtonProps {
  icon: string;
  label: string;
  onClick: () => void;
  children?: ReactNode;
}

interface IIconButton extends FC<IIconButtonProps> {}

const IconButton: IIconButton = ({ icon, label, onClick, children }) => {
  return (
    <Button label={label} onClick={onClick}>
      {children}
    </Button>
  );
};

export default IconButton;
