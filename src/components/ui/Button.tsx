import { MouseEvent, ReactNode } from 'react';

import classes from './Button.module.scss';

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
  const rootClasses = [
    'button',
    ...className.split(' '),
  ];
  const rootClassName = rootClasses
    .map((cName) => classes[cName] || cName)
    .filter(Boolean)
    .join(' ');

  const clickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    onClick(event);
  };

  return (
    <button
      type='button'
      className={rootClassName}
      onClick={clickHandler}
    >
      { children }
    </button>
  );
}

export default Button;
