import classNames from 'classnames/bind';
import styles from './react-dialog.module.scss';

const cx = classNames.bind(styles);

/* eslint-disable-next-line */
export interface ReactDialogProps {
  dialog: boolean,
  toFadeOut? : boolean,
  children?: React.ReactNode,
}

export const ReactDialog: React.FC<ReactDialogProps> = ({
  dialog = false,
  toFadeOut = false,
  children,
}) => {
  return (
    dialog
    ? <div id={styles['dialog-wrapper']}>
        <div className={cx(styles['dialog-box'], toFadeOut && styles['fade-out'])}>
          {children}
        </div>
    </div>
    : null
  );
}
