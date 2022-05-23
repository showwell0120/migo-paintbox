import React from 'react';
import styles from './react-toast.module.scss';

/* eslint-disable-next-line */
export interface ReactToastProps {
  message: string,
  children?: React.ReactNode,
}

export const ReactToast: React.FC<ReactToastProps> = ({
  message,
  children,
}) => {
  return (
    <div className={styles['toast-container']}>
      <div>{message}</div>
      {children}
    </div>
  );
}
