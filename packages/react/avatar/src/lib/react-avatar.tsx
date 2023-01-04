import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { FileIcons } from '@paintbox/react-foundation';
import { ReactToast } from '@paintbox/react-toast';
import {
  ImageUploadReminder,
  useImageUpload,
  ImageFileProps,
  imageDefaultIconStyle,
} from '@paintbox/react-base';

/* eslint-disable-next-line */
export interface ReactAvatarProps extends ImageFileProps {}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.25rem;
`;

const AvatarBox = styled.div`
  position: relative;
  border: 1px solid var(--gray-400);
  border-radius: 50%;
  background-color: var(--primary-white);
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EditWrapper = styled.div`
  position: absolute;
  color: var(--primary-primary);
  border: 1px solid var(--primary-primary);
  border-radius: 50%;
  background-color: var(--primary-white);
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(290%, -110%);
  &:hover {
    cursor: pointer;
    background-color: var(--gray-200);
  }
`;

const labelStyle = css`
  margin-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const uploadIconStyle = css`
  svg {
    path {
      stroke: none;
      fill: var(--primary-primary);
    }
  }
`;

const inputStyle = css`
  width: 0.1px;
  height: 0.1px;
`;

export function ReactAvatar(props: ReactAvatarProps) {
  const {
    displaySize,
    imageURL,
    editable,
    style,
    className,
    accept = 'image/jpg, image/jpeg',
    imageSubject = 'Avatar',
    aspectRatio = { width: 1, height: 1 },
  } = props;

  const { errorMsg, setErrorMsg, handleSelectFile } = useImageUpload({
    ...props,
    aspectRatio,
  });

  return (
    <Container {...(style && { style })} {...(className && { className })}>
      <AvatarBox
        style={{
          ...displaySize,
          ...(imageURL && { backgroundImage: `url(${imageURL})` }),
        }}
        css={imageDefaultIconStyle}
      >
        {!imageURL && <FileIcons.ImageOutlined width={'30%'} height={'30%'} />}
        {editable && (
          <EditWrapper
            style={{
              top: displaySize?.width,
              left: 0,
              width: (displaySize?.width as number) * 0.26,
              height: (displaySize?.width as number) * 0.26,
            }}
          >
            <input
              id="avatar-upload"
              type={'file'}
              accept={accept}
              multiple={false}
              css={inputStyle}
              onChange={handleSelectFile}
            />
            <label htmlFor="avatar-upload" css={[labelStyle, uploadIconStyle]}>
              <FileIcons.Images width={'50%'} height={'50%'} />
            </label>
          </EditWrapper>
        )}
      </AvatarBox>
      {editable && (
        <ImageUploadReminder {...props} {...{ imageSubject, aspectRatio }} />
      )}

      {errorMsg ? (
        <ReactToast theme={'secondary-danger'} onClose={() => setErrorMsg('')}>
          {errorMsg}
        </ReactToast>
      ) : null}
    </Container>
  );
}
