import styled from '@emotion/styled';
import { css } from '@emotion/react';
export interface TabItem {
  id: number;
  name: string;
  count?: number;
}

/* eslint-disable-next-line */
export interface ReactTabsProps {
  tabs: TabItem[];
  currentTabID: number;
  onTabChange: (tabID: number) => void;
}

const Container = styled.div`
  display: flex;
  border-bottom: 1px solid var(--primary-muted);
`;

const tabStyle = css`
  padding: 0.5rem 1rem;
  color: var(--primary-muted);
  cursor: pointer;
`;

const tabSelectedStyle = css`
  color: var(--primary-primary);
  border-bottom: 4px solid var(--primary-primary);
`;

export function ReactTabs({ tabs, currentTabID, onTabChange }: ReactTabsProps) {
  return (
    <Container>
      {tabs.map((tab) =>
        tab.count === undefined || tab.count !== 0 ? (
          <div
            key={tab.id}
            css={[tabStyle, currentTabID === tab.id && tabSelectedStyle]}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.name}
            &nbsp;
            {tab.count !== undefined ? `(${tab.count})` : null}
          </div>
        ) : null
      )}
    </Container>
  );
}