import React from 'react';
import classNames from 'classnames/bind';
import styles from './react-toast.module.scss';

const cx = classNames.bind(styles);

/* eslint-disable-next-line */
export interface ReactToastProps {
  message: string;
  children?: React.ReactNode;
  className?: string;
}

export const ReactToast: React.FC<ReactToastProps> = ({
  message,
  children,
  className,
}) => {
  return (
    <div className={cx(styles['toast-container'], className)}>
      {message && <div>{message}</div>}
      {children}
    </div>
  );
};
