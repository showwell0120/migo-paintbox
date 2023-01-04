import React from 'react';

export * from './use-image-upload';

export interface Size {
  width: number | string;
  height: number | string;
}

export interface ComponentBaseProps {
  className?: string;
  style?: React.CSSProperties;
}

export interface ImageFileProps extends ComponentBaseProps {
  imageURL: string;
  imageSubject: string;
  displaySize?: Size;
  exactSize?: Size;
  aspectRatio?: Size;
  accept?: string;
  maxFileSize?: number;
  editable?: boolean;
  required?: boolean;

  onImageSuccess?: (f: File | Blob | null) => void;
  onImageFailed?: (msg?: string) => void;
}
export interface ChangeHandlerParams<NameType = string> {
  valid: boolean;
  value: number | null;
  name: NameType;
}

export interface FormFieldBaseProps<NameType = string> {
  value: number | null;
  name: NameType;
  min?: number | null | undefined;

  onChange: (param: ChangeHandlerParams<NameType>) => void;
}
