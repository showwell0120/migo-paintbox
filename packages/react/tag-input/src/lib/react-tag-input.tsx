import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ReactTagInputProps {}

const StyledReactTagInput = styled.div`
  color: pink;
`;

export function ReactTagInput(props: ReactTagInputProps) {
  return (
    <StyledReactTagInput>
      <h1>Welcome to ReactTagInput!</h1>
    </StyledReactTagInput>
  );
}