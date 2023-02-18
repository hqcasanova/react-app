import { createElement, ReactNode } from 'react';

import './Card.scss';

type Props = {
  tagName?: string,
  className?: string,
  children: ReactNode,
};

function Card({
  tagName = 'div',
  className = '',
  children,
}: Props) {
  const classes = `card ${className}`;

  return createElement(
    tagName,
    { className: classes },
    children,
  );
}

export default Card;
