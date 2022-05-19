import classNames from 'classnames/bind';
import styles from './react-button.module.scss';

const cx = classNames.bind(styles);

type ColorType = 'default' | 'gray' | 'red';

type VariantType = 'default' | 'light' | 'outlined';

/* eslint-disable-next-line */
export interface ReactButtonProps {
  color?: ColorType,
  variant?: VariantType,
  disabled?: boolean,
  children?: React.ReactNode,
  onClick?: () => void,
}

export const ReactButton: React.FC<ReactButtonProps> = ({
  color = 'default',
  variant = 'default',
  disabled = false,
  children,
  onClick
}) => {
  function clickHandler() {
    if (!disabled && onClick) {
      onClick();
    }
  }

  return (
    disabled
    ? <button className={styles['disabled']}>{children}</button>
    : <button className={cx(styles['button'], styles[`button--${color}--${variant}`])} onClick={clickHandler}>
      {children}
    </button>
  );
}
