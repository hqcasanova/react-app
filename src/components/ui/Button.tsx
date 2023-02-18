import { MouseEvent, ReactNode } from 'react';

import './Button.scss';

type Props = {
  className?: string,
  onClick: (event: MouseEvent<HTMLButtonElement>) => void,
  children: ReactNode,
};

function Button({
  className = '',
  onClick,
  children,
}: Props) {
  const classes = `button ${className}`;

  const clickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    onClick(event);
  };

  return (
    <button
      type='button'
      className={classes}
      onClick={clickHandler}
    >
      { children }
    </button>
  );
}

export default Button;
