import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { FileIcons, Small } from '@paintbox/react-foundation';
import { ReactToast } from '@paintbox/react-toast';

/* eslint-disable-next-line */
export interface ReactAvatarProps {
  avatarURL: string | undefined;
  editable?: boolean;
  displaySize?: number;
  exactSize?: number;
  required?: boolean;
  avatarName?: string;

  onImageSuccess: (f: File | Blob) => void;
  onImageError?: (msg?: string) => void;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.25rem;
`;

const RequiredText = styled.div`
  color: var(--primary-danger);
`;

const ExactSizeText = styled.div`
  color: var(--primary-secondary);
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

const defaultIconStyle = css`
  svg {
    path {
      stroke: var(--gray-400);
    }
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

export function ReactAvatar({
  avatarURL,
  editable = false,
  displaySize = 50,
  exactSize,
  required = true,
  avatarName = 'ICON',
  onImageError,
  onImageSuccess,
}: ReactAvatarProps) {
  const [errorMsg, setErrorMsg] = React.useState<string>('');

  const handleSelectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const f = event?.target?.files?.[0] as Blob;
    let _errorMsg = '';

    if (!f) {
      _errorMsg = 'Could not access the file. Please try again.';
      setErrorMsg(_errorMsg);
      onImageError?.(_errorMsg);
      return;
    }

    const imgURL = URL.createObjectURL(f);
    const dummyImg = new Image();
    dummyImg.src = imgURL;

    dummyImg.onabort = () => {
      _errorMsg = 'Could not access the file. Please try again.';
      setErrorMsg(_errorMsg);
      onImageError?.(_errorMsg);
    };

    dummyImg.onerror = () => {
      _errorMsg = 'Could not access the file. Please try again.';
      setErrorMsg(_errorMsg);
      onImageError?.(_errorMsg);
    };

    dummyImg.onload = () => {
      const { naturalWidth, naturalHeight } = dummyImg;

      if (naturalWidth / naturalHeight !== 1) {
        _errorMsg =
          "The ratio doesn't equal to 1:1. Please upload another image.";
        setErrorMsg(_errorMsg);
        onImageError?.(_errorMsg);
      } else if (
        exactSize &&
        (exactSize !== naturalWidth || exactSize !== naturalHeight)
      ) {
        _errorMsg = `The size doesn't match ${exactSize}px. Please upload another image.`;
        setErrorMsg(_errorMsg);
        onImageError?.(_errorMsg);
      } else {
        onImageSuccess(f);
      }
    };
  };

  return (
    <Container>
      <AvatarBox
        style={{
          width: displaySize,
          height: displaySize,
          ...(avatarURL && { backgroundImage: `url(${avatarURL})` }),
        }}
        css={defaultIconStyle}
      >
        {!avatarURL && <FileIcons.ImageOutlined width={'60%'} height={'60%'} />}
        {editable && (
          <EditWrapper
            style={{
              top: displaySize,
              left: 0,
              width: displaySize * 0.26,
              height: displaySize * 0.26,
            }}
          >
            <input
              id="avatar-upload"
              type={'file'}
              accept={'image/jpg, image/jpeg'}
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
      {!avatarURL && required && editable ? (
        <RequiredText>
          <Small>{avatarName} is required.</Small>
        </RequiredText>
      ) : null}
      {exactSize ? (
        <ExactSizeText>
          <Small>
            {avatarName} size: {exactSize}x{exactSize}px
          </Small>
        </ExactSizeText>
      ) : null}
      {errorMsg ? (
        <ReactToast theme={'secondary-danger'} onClose={() => setErrorMsg('')}>
          {errorMsg}
        </ReactToast>
      ) : null}
    </Container>
  );
}
