import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ReactTimePickerProps {}

const StyledReactTimePicker = styled.div`
  color: pink;
`;

export function ReactTimePicker(props: ReactTimePickerProps) {
  return (
    <StyledReactTimePicker>
      <h1>Welcome to ReactTimePicker!</h1>
    </StyledReactTimePicker>
  );
}

export default ReactTimePicker;
