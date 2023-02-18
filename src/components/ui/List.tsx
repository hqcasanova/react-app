import { ReactNode } from 'react';

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
          : <li>{ emptyItem }</li>
      }
    </ul>
  );
}

export default List;
