import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const itemStyle = css`
  font-size: 14px;
  line-height: 18px;
`;

const contentStyle = css`
  padding: 12px 12px;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  min-width: 150px;
  color: var(--text-body);
  &:hover {
    cursor: pointer;
    background-color: var(--primary-hover);
    border-radius: 4px;
  }
`;

const activeStyle = css`
  background-color: var(--primary-hover);
  border-radius: 4px;
`;

const Text = styled.div`
  padding: 0 8px;
  width: 90%;
`;
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
          <div key={item.id} css={itemStyle}>
            <div
              css={[contentStyle, selectedTab === item.name && activeStyle]}
              style={{ paddingLeft: depth * 14 }}
              onClick={() => clickHandler(item)}
            >
              <div>{item.icon}</div>
              <Text>{item.name}</Text>
              <div>{item.info}</div>
            </div>
            {item.children && (
              <ReactTreeView
                items={item.children}
                selectedTab={selectedTab}
                onSelectTab={onSelectTab}
                depth={depth + 1}
              />
            )}
          </div>
        ))}
      </>
    )
  );
};
