import classNames from 'classnames/bind';
import React from 'react';
import styles from './react-tree-view.module.scss';

const cx = classNames.bind(styles);

// export ItemType，在 story 中將 itemProps 多個型別定義，在設定 args 時才能 pass 檢查
interface ItemType {
  id: string;
  name: string;
  children: Array<ItemType>; // 以 story 來看，這個 prop 應該是 optional (?)
}

/* eslint-disable-next-line */
export interface ReactTreeViewProps {
  items: Array<ItemType>;
  selectedTab: string;
  prepend?: React.ReactNode;
  append?: React.ReactNode;
  depth?: number;
  selectTab?: (item: ItemType) => void; // event type 的 prop 以 on 開頭，比較不會跟 selectedTab 混淆 (onSelectTab)
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
    // 如果有 children 的 case?
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
              {prepend}
              <div className={styles['text']}>{item.name}</div>
              {append}
            </div>
            {/* 如果 children 是 optional，要再多加個判斷 */}
            <ReactTreeView
              items={item.children}
              selectedTab={selectedTab}
              selectTab={selectTab}
              depth={depth + 1}
              prepend={prepend}
              append={append}
            />
          </div>
        ))}
      </>
    )
  );
};

// 統一 export 方式
export default ReactTreeView;
