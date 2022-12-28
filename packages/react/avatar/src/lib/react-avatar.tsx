import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ReactAvatarProps {}

const StyledReactAvatar = styled.div`
  color: pink;
`;

export function ReactAvatar(props: ReactAvatarProps) {
  return (
    <StyledReactAvatar>
      <h1>Welcome to ReactAvatar!</h1>
    </StyledReactAvatar>
  );
}

export default ReactAvatar;
