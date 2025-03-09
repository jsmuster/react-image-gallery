import React, { ReactNode, FC } from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  children?: ReactNode;
}

interface IButton extends FC<ButtonProps> {}

const Button: IButton = ({ label, onClick, children }) => {
  return (
    <button onClick={onClick}>
      {label}
      {children}
    </button>
  );
};

export default Button;
