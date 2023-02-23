import { ReactNode } from 'react';

import './List.scss';

type Props<ItemType> = {
  className?: string,
  items: ItemType[],
  emptyItem: ReactNode,
  children: (item: ItemType, tagName: string) => ReactNode,
};

function List({
  className = '',
  items,
  emptyItem,
  children,
}: Props<any>) {
  const classes = `list ${className}`;

  return (
    <ul className={classes}>
      {
        items.length > 0
          ? items.map((item) => children(item, 'li'))
          : <li className='list--empty'>{ emptyItem }</li>
      }
    </ul>
  );
}

export default List;
