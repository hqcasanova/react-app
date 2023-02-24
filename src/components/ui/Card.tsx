import { createElement, ReactNode } from 'react';

import classes from './Card.module.scss';

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
  const rootClasses = [
    'card',
    ...className.split(' '),
  ];
  const rootClassName = rootClasses
    .map((cName) => classes[cName] || cName)
    .filter(Boolean)
    .join(' ');

  return createElement(
    tagName,
    { className: rootClassName },
    children,
  );
}

export default Card;
