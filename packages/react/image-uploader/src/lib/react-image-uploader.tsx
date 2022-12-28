import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ReactImageUploaderProps {}

const StyledReactImageUploader = styled.div`
  color: pink;
`;

export function ReactImageUploader(props: ReactImageUploaderProps) {
  return (
    <StyledReactImageUploader>
      <h1>Welcome to ReactImageUploader!</h1>
    </StyledReactImageUploader>
  );
}

export default ReactImageUploader;
