import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { FileIcons } from '@paintbox/react-foundation';
import { ReactToast } from '@paintbox/react-toast';
import { ReactButton } from '@paintbox/react-button';
import {
  ImageUploadReminder,
  useImageUpload,
  ImageFileProps,
  imageDefaultIconStyle,
} from '@paintbox/react-base';

/* eslint-disable-next-line */
export interface ReactImageUploaderProps extends ImageFileProps {}

const ImagePreview = styled.div`
  border: 1px solid var(--gray-400);
  background-color: var(--primary-white);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Buttons = styled.div`
  display: flex;
  gap: 1rem;
`;

const inputStyle = css`
  opacity: 0;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 42px;
`;

export function ReactImageUploader(props: ReactImageUploaderProps) {
  const {
    displaySize,
    imageURL,
    editable,
    imageSubject,
    accept = 'image/jpg, image/jpeg',
    style,
    className,
    onImageSuccess,
  } = props;
  const { errorMsg, setErrorMsg, handleSelectFile } = useImageUpload(props);

  return (
    <div {...(style && { style })} {...(className && { className })}>
      <ImagePreview
        style={{
          ...displaySize,
          ...(imageURL && { backgroundImage: `url(${imageURL})` }),
        }}
        css={imageDefaultIconStyle}
      >
        {!imageURL && <FileIcons.ImageOutlined width={'30%'} height={'30%'} />}
      </ImagePreview>
      {editable && (
        <>
          <ImageUploadReminder {...props} />
          <Buttons>
            <ReactButton style={{ position: 'relative' }}>
              <span>Upload {imageSubject}</span>
              <input
                type={'file'}
                accept={accept}
                multiple={false}
                css={inputStyle}
                onChange={handleSelectFile}
              />
            </ReactButton>
            {imageURL && (
              <ReactButton
                variant="contained"
                theme="primary-muted"
                onClick={() => onImageSuccess?.(null)}
              >
                Remove {imageSubject}
              </ReactButton>
            )}
          </Buttons>
        </>
      )}
      {errorMsg ? (
        <ReactToast theme={'secondary-danger'} onClose={() => setErrorMsg('')}>
          {errorMsg}
        </ReactToast>
      ) : null}
    </div>
  );
}
