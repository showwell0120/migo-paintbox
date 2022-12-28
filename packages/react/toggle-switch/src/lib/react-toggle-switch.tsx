import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ReactToggleSwitchProps {}

const StyledReactToggleSwitch = styled.div`
  color: pink;
`;

export function ReactToggleSwitch(props: ReactToggleSwitchProps) {
  return (
    <StyledReactToggleSwitch>
      <h1>Welcome to ReactToggleSwitch!</h1>
    </StyledReactToggleSwitch>
  );
}

export default ReactToggleSwitch;
