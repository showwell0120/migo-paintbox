import classNames from 'classnames/bind';
import styles from './react-dialog.module.scss';

const cx = classNames.bind(styles);

/* eslint-disable-next-line */
export interface ReactDialogProps {
  toFadeOut? : boolean,
  children?: React.ReactNode,
}

export const ReactDialog: React.FC<ReactDialogProps> = ({
  toFadeOut = false,
  children,
}) => {
  return (
    <div id={styles['dialog-wrapper']}>
      <div className={cx(styles['dialog-box'], toFadeOut && styles['fade-out'])}>
        {children}
      </div>
    </div>
  );
}
