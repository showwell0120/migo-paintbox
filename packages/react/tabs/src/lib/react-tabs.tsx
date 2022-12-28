import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ReactTabsProps {}

const StyledReactTabs = styled.div`
  color: pink;
`;

export function ReactTabs(props: ReactTabsProps) {
  return (
    <StyledReactTabs>
      <h1>Welcome to ReactTabs!</h1>
    </StyledReactTabs>
  );
}

export default ReactTabs;
