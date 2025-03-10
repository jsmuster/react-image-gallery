import React, { FC, ReactNode } from 'react';

interface ITabButtonProps {
  label: string;
  children?: ReactNode;
}

interface ITabButton extends FC<ITabButtonProps> {}

const TabButton: ITabButton = ({ label, children }) => {
  return (
    <button>
      {label}
      {children}
    </button>
  );
};

export default TabButton;
