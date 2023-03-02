import React from 'react';

interface ButtonProps {
  label: string;
  color: string;
  primary?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ color, label, primary = false, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      style={{ backgroundColor: color }}
      className={`Button ${primary ? 'Button--primary' : ''}`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default Button;
