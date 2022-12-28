import React from 'react';
import { css, ClassNames } from '@emotion/react';
import styled from '@emotion/styled';

import { ColorThemeType, SignIcons } from '@paintbox/react-foundation';

/* eslint-disable-next-line */
export interface ReactToastProps {
  theme: Extract<
    ColorThemeType,
    | 'secondary-danger'
    | 'secondary-warning'
    | 'secondary-info'
    | 'secondary-success'
  >;
  children: React.ReactNode;
  yAxis?: 'top' | 'center' | 'bottom';
  xAxis?: 'right' | 'center' | 'left';
  className?: string;
  waitToClose?: number;
  enableClose?: boolean;
  showPrefixIcon?: boolean;

  onClose?: (visible: boolean) => void;
}

type cssProps = {
  xAxis: 'right' | 'center' | 'left';
  yAxis: 'top' | 'center' | 'bottom';
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

const Container = styled.div<cssProps>(baseStyle, (props: cssProps) => {
  return css`
    ${xAxisStyle[props.xAxis]}
    ${yAxisStyle[props.yAxis]}
  `;
});

export const ReactToast: React.FC<ReactToastProps> = ({
  theme,
  children,
  yAxis = 'top',
  xAxis = 'center',
  className,
  waitToClose,
  enableClose = true,
  showPrefixIcon = true,
  onClose,
}) => {
  const timer = React.useRef<ReturnType<typeof setTimeout>>();

  const handleClose = () => {
    onClose?.(false);
  };

  const PrefixIcon = React.useMemo(() => {
    const themeVar = theme ? theme.split('-')[1] : '';
    switch (themeVar) {
      case 'danger':
        return <SignIcons.ExclamationCircleFill />;
      case 'warning':
        return <SignIcons.ExclamationTriangleFill />;
      case 'info':
        return <SignIcons.InfoCircleFill />;
      case 'success':
        return <SignIcons.CheckCircleFill />;
      default:
        return;
    }
  }, [theme]);

  React.useEffect(() => {
    waitToClose &&
      (timer.current = setTimeout(() => {
        handleClose();
        clearTimeout(timer.current);
      }, waitToClose));
  }, [waitToClose, onClose, handleClose]);

  return (
    <ClassNames>
      {({ css, cx }) => (
        <Container
          xAxis={xAxis}
          yAxis={yAxis}
          className={cx(`${theme}-contained`, className)}
        >
          {showPrefixIcon && PrefixIcon}
          {children}
          {enableClose && (
            <div onClick={handleClose} style={{ cursor: 'pointer' }}>
              <SignIcons.X height={10} width={10} className={css``} />
            </div>
          )}
        </Container>
      )}
    </ClassNames>
  );
};
