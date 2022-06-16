import classNames from 'classnames/bind';
import React from 'react';
import styles from './react-tree-view.module.scss';

const cx = classNames.bind(styles);

export interface ItemType {
  id: string;
  name: string;
  icon?: React.ReactNode;
  info?: string;
  children?: Array<ItemType>;
}

/* eslint-disable-next-line */
export interface ReactTreeViewProps {
  items: Array<ItemType>;
  selectedTab: string;
  depth?: number;
  onSelectTab?: (item: ItemType) => void;
}

export const ReactTreeView: React.FC<ReactTreeViewProps> = ({
  items,
  selectedTab,
  depth = 1,
  onSelectTab,
}) => {
  const clickHandler = (item: ItemType) => {
    if (!item.children || item.children.length === 0) {
      onSelectTab && onSelectTab(item);
    }
  };

  return (
    items && (
      <>
        {items.map((item) => (
          <div key={item.id} className={styles['item']}>
            <div
              className={cx(
                styles['content'],
                selectedTab === item.name ? styles['active'] : ''
              )}
              style={{ paddingLeft: depth * 14 }}
              onClick={() => clickHandler(item)}
            >
              <div className={styles['icon']}>{item.icon}</div>
              <div className={styles['text']}>{item.name}</div>
              <div className={styles['info']}>{item.info}</div>
            </div>
            { item.children && <ReactTreeView
              items={item.children}
              selectedTab={selectedTab}
              onSelectTab={onSelectTab}
              depth={depth + 1}
            />}
          </div>
        ))}
      </>
    )
  );
};
