import { css } from '@emotion/react';
import React from 'react';

import { ReactButton } from '@paintbox/react-button';

const containerStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2147483646;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
`;

const boxStyle = css`
  position: relative;
  z-index: 202;
  padding: 2rem;
  margin: auto;
  background-color: var(--primary-white);
  border-radius: 4px;
`;

/* eslint-disable-next-line */
export interface ReactDialogProps {
  isOpen: boolean;
  closeOnOverlayClick?: boolean;
  children?: React.ReactNode;
  actionPosition?: 'top' | 'bottom';
  cancelText?: string;
  submitText?: string;
  className?: string;

  onClose: () => void;
  onCancel?: () => void;
  onSubmit?: () => void;
}

export const ReactDialog: React.FC<ReactDialogProps> = ({
  isOpen,
  onClose,
  onCancel,
  onSubmit,
  closeOnOverlayClick = false,
  actionPosition = 'bottom',
  cancelText = 'Cancel',
  submitText = 'Submit',
  children,
  className,
}) => {
  const onClickOverlay = (e: React.MouseEvent<HTMLDivElement>) => {
    const overlay = e.target as HTMLDivElement;
    const isOverlay = overlay.id === 'overlay';
    if (closeOnOverlayClick && isOverlay) {
      onClose();
    }
  };

  const ActionButtons = React.useMemo(() => {
    if (!onCancel && !onSubmit) {
      return null;
    }

    return (
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
        {onCancel && (
          <ReactButton variant={'outlined'} onClick={onCancel}>
            {cancelText}
          </ReactButton>
        )}
        {onSubmit && <ReactButton onClick={onSubmit}>{submitText}</ReactButton>}
      </div>
    );
  }, [onCancel, onSubmit]);

  return isOpen ? (
    <div css={containerStyle} id={'overlay'} onClick={onClickOverlay}>
      <div css={boxStyle} className={className}>
        {actionPosition === 'top' && (
          <div style={{ marginBottom: '1rem' }}>{ActionButtons}</div>
        )}
        {children}
        {actionPosition === 'bottom' && (
          <div style={{ marginTop: '1rem' }}>{ActionButtons}</div>
        )}
      </div>
    </div>
  ) : null;
};