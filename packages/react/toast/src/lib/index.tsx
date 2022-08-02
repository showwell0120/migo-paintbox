import React from 'react';
import classNames from 'classnames/bind';

import { Cross, ExclamationCycleFill } from '@paintbox/design-foundation';

import styles from './react-toast.module.scss';

const cx = classNames.bind(styles);

export type VariantType = 'warn' | 'info';

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
      return '#000000';
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
    <div
      className={cx(
        styles['container'],
        styles[variant],
        styles[`y-${yAxis}`],
        styles[`x-${xAxis}`],
        className
      )}
    >
      {variant === 'warn' && (
        <ExclamationCycleFill {...(stroke && { stroke })} />
      )}
      {children && children}
      {enableClose && (
        <div onClick={handleClose} className={styles['close']}>
          <Cross {...(stroke && { stroke })} size={10} />
        </div>
      )}
    </div>
  );
};
