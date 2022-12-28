import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ReactBreadcrumbProps {}

const StyledReactBreadcrumb = styled.div`
  color: pink;
`;

export function ReactBreadcrumb(props: ReactBreadcrumbProps) {
  return (
    <StyledReactBreadcrumb>
      <h1>Welcome to ReactBreadcrumb!</h1>
    </StyledReactBreadcrumb>
  );
}

export default ReactBreadcrumb;
