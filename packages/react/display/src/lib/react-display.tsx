import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ReactDisplayProps {}

const StyledReactDisplay = styled.div`
  color: pink;
`;

export function ReactDisplay(props: ReactDisplayProps) {
  return (
    <StyledReactDisplay>
      <h1>Welcome to ReactDisplay!</h1>
    </StyledReactDisplay>
  );
}

export default ReactDisplay;
