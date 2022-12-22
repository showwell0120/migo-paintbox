import { css } from '@emotion/react';
import React, { useState } from 'react';

const containerStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2147483646;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, .50);
  display: flex;
  justify-content: center;
`;

const boxStyle = css`
  position: relative;
  z-index: 202;
  padding: 2rem;
  margin: auto;
  background-color: var(--primary-transparent);
  border-radius: 4px;
`;

/* eslint-disable-next-line */
export interface ReactDialogProps {
  isOpen: boolean,
  onClose: () => void,
  closeOnOverlayClick?: boolean,
  children?: React.ReactNode,
}

export const ReactDialog: React.FC<ReactDialogProps> = ({
  isOpen,
  onClose,
  closeOnOverlayClick = false,
  children,
}) => {
  const onClickOverlay = (e: React.MouseEvent<HTMLDivElement>) => {
    const overlay = e.target as HTMLDivElement;
    const isOverlay = overlay.id === 'overlay';
    if (closeOnOverlayClick && isOverlay) {
      onClose();
    }
  };

  return (
    isOpen
    ? <div css={containerStyle} id={'overlay'} onClick={onClickOverlay}>
      <div css={boxStyle}>
        {children}
      </div>
    </div>
    : null
  );
}

export const DialogSample = () => {
  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
  };

  return (<div>
    <button onClick={() => {setOpen(true)}}>Click to open</button>
    <ReactDialog isOpen={open} onClose={onClose}>
      <div>Check</div>
      <button onClick={onClose}>click to close</button>
    </ReactDialog>
  </div>);
};

export const ClickOverlaySample = () => {
  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
  };

  return (<div>
    <button onClick={() => {setOpen(true)}}>Click to open</button>
    <ReactDialog isOpen={open} onClose={onClose} closeOnOverlayClick={true}>
      <div>Check</div>
      <button onClick={onClose}>click to close</button>
    </ReactDialog>
  </div>);
};
