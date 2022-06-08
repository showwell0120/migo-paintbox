import classNames from 'classnames/bind';
import React from 'react';
import styles from './react-tree-view.module.scss';

const cx = classNames.bind(styles);

interface ItemType {
  id: string,
  name: string,
  children: Array<ItemType>,
}

/* eslint-disable-next-line */
export interface ReactTreeViewProps {
  items: Array<ItemType>,
  selectedTab: string,
  prepend?: React.ReactNode,
  append?: React.ReactNode,
  depth?: number,
  selectTab?: (item: ItemType) => void,
}

export const ReactTreeView: React.FC<ReactTreeViewProps> = ({
  items,
  selectedTab,
  prepend,
  append,
  depth = 1,
  selectTab,
}) => {
  const clickHandler = (item: ItemType) => {
    if (!item.children || item.children.length === 0) {
      selectTab && selectTab(item);
    }
  }

  return (
    items && <>
      {items.map(item => <div key={item.id} className={styles['item']}>
        <div
          className={cx(styles['content'], selectedTab === item.name ? styles['active'] : '')}
          style={{ paddingLeft: depth * 14 }}
          onClick={() => clickHandler(item)}
        >
          {prepend}
          <div className={styles['text']}>{item.name}</div>
          {append}
        </div>
        <ReactTreeView 
          items={item.children}
          selectedTab={selectedTab}
          selectTab={selectTab}
          depth={depth + 1}
          prepend={prepend}
          append={append}
        />
      </div>)
      }
    </>
  );
}

export default ReactTreeView;
