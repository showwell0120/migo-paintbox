import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { Small } from '@paintbox/react-foundation';

import { ImageFileProps } from '.';

// TODO: move out
const KB = 1024;
const MB = KB * 1024;
const GB = MB * 1024;

export const getDisplayedSize = (bytes: number, digits = 2) => {
  if (!bytes) {
    return '0 B';
  }
  if (bytes < KB) {
    return `${bytes} B`;
  } else if (bytes >= KB && bytes < MB) {
    return `${(bytes / KB).toFixed(digits)} KB`;
  } else if (bytes >= MB && bytes < GB) {
    return `${(bytes / MB).toFixed(digits)} MB`;
  } else {
    return `${(bytes / GB).toFixed(digits)} GB`;
  }
};


const RemindText = styled.li`
  color: var(--primary-secondary);
`;

const RemindList = styled.ul`
  padding-inline-start: 1rem;
`;

const RequiredText = styled.div`
  color: var(--primary-danger);
`;

export const imageDefaultIconStyle = css`
  svg {
    path {
      stroke: var(--gray-400);
    }
  }
`;

export function ImageUploadReminder({
  imageURL,
  required,
  editable,
  imageSubject,
  exactSize,
  aspectRatio,
  maxFileSize,
  accept,
}: ImageFileProps) {
  const displayedMaxFileSize = maxFileSize
    ? getDisplayedSize(maxFileSize, 0)
    : '';

  return (
    <div>
      {!imageURL && required && editable ? (
        <RequiredText>
          <Small>{imageSubject} is required.</Small>
        </RequiredText>
      ) : null}
      <RemindList>
        {exactSize && (
          <RemindText>
            <Small>
              Image size: {exactSize.width}x{exactSize.height}px
            </Small>
          </RemindText>
        )}
        {aspectRatio && (
          <RemindText>
            <Small>
              Aspect ratio: {aspectRatio.width}:{aspectRatio.height}
            </Small>
          </RemindText>
        )}
        {maxFileSize && (
          <RemindText>
            <Small>Maximum upload file size: {displayedMaxFileSize}</Small>
          </RemindText>
        )}
        {accept && (
          <RemindText>
            <Small>Allowed file type: {accept}</Small>
          </RemindText>
        )}
      </RemindList>
    </div>
  );
}

export function useImageUpload({
  maxFileSize,
  exactSize,
  aspectRatio,
  onImageFailed,
  onImageSuccess,
}: ImageFileProps) {
  const [errorMsg, setErrorMsg] = React.useState<string>('');

  const handleSelectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const f = event?.target?.files?.[0] as Blob;
    let _errorMsg = '';

    if (!f) {
      _errorMsg = 'Could not access the file. Please try again.';
      setErrorMsg(_errorMsg);
      onImageFailed?.(_errorMsg);
      return;
    }

    const handleImageFailed = (msg?: string) => {
      setErrorMsg(msg || '');
      onImageFailed?.(msg);
      return;
    };

    const imgURL = URL.createObjectURL(f);
    const dummyImg = new Image();
    dummyImg.src = imgURL;

    dummyImg.onabort = () =>
      handleImageFailed('Could not access the file. Please try again.');

    dummyImg.onerror = () =>
      handleImageFailed('Could not access the file. Please try again.');

    dummyImg.onload = () => {
      const { naturalWidth, naturalHeight } = dummyImg;

      if (maxFileSize && f.size > maxFileSize) {
        handleImageFailed(
          `The file size is larger than ${getDisplayedSize(
            maxFileSize,
            0
          )}. Please try again.`
        );
      } else if (
        aspectRatio &&
        naturalWidth / naturalHeight !==
          (aspectRatio.width as number) / (aspectRatio.height as number)
      ) {
        handleImageFailed(
          `The aspect ratio doesn't match ${aspectRatio.width}:${aspectRatio.height}. Please upload another image.`
        );
      } else if (
        exactSize &&
        (exactSize.height !== naturalHeight || exactSize.width !== naturalWidth)
      ) {
        handleImageFailed(
          `The size doesn't match ${exactSize.width}x${exactSize.height}px. Please upload another image.`
        );
      } else {
        onImageSuccess?.(f);
      }
    };
  };

  return {
    errorMsg,
    setErrorMsg,
    handleSelectFile,
  };
}
