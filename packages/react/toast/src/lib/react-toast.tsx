import React from 'react';
import { css, ClassNames } from '@emotion/react';
import styled from '@emotion/styled';

import { Cross, ExclamationCycleFill } from '@paintbox/react-foundation';

export type VariantType = 'warn' | 'info';

type cssProps = {
  xAxis: 'right' | 'center' | 'left',
  yAxis: 'top' | 'center' | 'bottom',
  variant: VariantType,
};

const baseStyle = css`
  position: fixed;
  font-size: 0.875rem;
  z-index: 2147483647;
  border-radius: 4px;
  padding: 8px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  border: 1px solid transparent;
`;

const warnStyle = css`
  color: #DC3545;
  background-color: rgba(220, 53, 69, 0.08);
  border-color:#DC3545;
`;

const infoStyle = css`
  color: #ffffff;
  background-color: #000000;
  border-color:#000000;
`;

const yAxisStyle = {
  top: 'top: 96px;',
  center: 'top: 50%; transform: translateY(-50%);',
  bottom: 'bottom: 96px;',
};

const xAxisStyle = {
  right: 'right: 36px;',
  center: 'left: 50%; transform: translateX(-50%);',
  left: 'left: 36px;',
};

const Container = styled.div(
  baseStyle,
  (props: cssProps) => {
    return css`
      ${props.variant === 'warn' ? warnStyle : infoStyle}
      ${xAxisStyle[props.xAxis]}
      ${yAxisStyle[props.yAxis]}
    `;
  }
);

/* eslint-disable-next-line */
export interface ReactToastProps {
  variant: VariantType;
  children?: React.ReactNode;
  onClose?: (visible: boolean) => void;
  yAxis?: 'top' | 'center' | 'bottom';
  xAxis?: 'right' | 'center' | 'left';
  className?: string;
  waitToClose?: number;
  enableClose?: boolean;
}

const getIconStroke = (variant: VariantType) => {
  switch (variant) {
    case 'warn':
      return '#DC3545';
    case 'info':
      return '#ffffff';
    default:
      return;
  }
};

export const ReactToast: React.FC<ReactToastProps> = ({
  variant,
  children,
  yAxis = 'top',
  xAxis = 'center',
  className,
  waitToClose,
  enableClose = true,
  onClose,
}) => {
  const timer = React.useRef<ReturnType<typeof setTimeout>>();

  const stroke = getIconStroke(variant);

  const handleClose = () => {
    onClose && onClose(false);
  };

  React.useEffect(() => {
    waitToClose &&
      (timer.current = setTimeout(() => {
        onClose && onClose(false);
        clearTimeout(timer.current);
      }, waitToClose));
  }, [waitToClose, onClose]);

  return (
    <ClassNames>
      {({ cx }) => (
        <Container variant={variant} xAxis={xAxis} yAxis={yAxis} className={cx(className)}>
        {variant === 'warn' && (
          <ExclamationCycleFill {...(stroke && { stroke })} />
        )}
        {children && children}
        {enableClose && (
          <div onClick={handleClose} style={{ cursor: 'pointer' }}>
            <Cross {...(stroke && { stroke })} size={10} />
          </div>
        )}
      </Container>
      )}
    </ClassNames>
  );
};

export const ToastSample = () => {
  const [open, setOpen] = React.useState(false);

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <p>Click button to see the info message <span role="img" aria-label="Pointing Down">👇</span></p>
      <button onClick={() => setOpen(true)}>Show message</button>
      {open && <ReactToast
        variant={'info'}
        enableClose={false}
        waitToClose={3000}
        onClose={onClose}
      >Price successfully updated!</ReactToast>}
      {open && <p>And it will be automatically closed in 3s.</p>}
    </div>
  );
};

export const WarnToastSample = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <p>Click button to see the warn message <span role="img" aria-label="Pointing Down">👇</span></p>
      <button onClick={() => setOpen(true)}>Show warning</button>
      {open && <ReactToast
        variant={'warn'}
        yAxis={'top'}
        xAxis={'right'}
        onClose={() => setOpen(false)}
      >Unable to log in, please check your login information and try again.</ReactToast>}
    </div>
  );
};
