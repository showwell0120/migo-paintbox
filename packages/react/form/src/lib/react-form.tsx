import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ReactFormProps {}

const StyledReactForm = styled.div`
  color: pink;
`;

export function ReactForm(props: ReactFormProps) {
  return (
    <StyledReactForm>
      <h1>Welcome to ReactForm!</h1>
    </StyledReactForm>
  );
}

export default ReactForm;
