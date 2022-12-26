import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ReactIconActionProps {}

const StyledReactIconAction = styled.div`
  color: pink;
`;

export function ReactIconAction(props: ReactIconActionProps) {
  return (
    <StyledReactIconAction>
      <h1>Welcome to ReactIconAction!</h1>
    </StyledReactIconAction>
  );
}

export default ReactIconAction;
