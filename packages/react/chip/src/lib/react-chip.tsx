import classNames from 'classnames/bind';
import styles from './react-chip.module.scss';

const cx = classNames.bind(styles);

type ColorType = 'green' | 'red' | 'blue' | 'white';
interface ColorSetting {
  text: string;
  background: string;
}

function getColor(type: ColorType): ColorSetting {
  switch (type) {
    case 'green':
      return {
        text: '#007F00',
        background: '#CDFFCD',
      };
    case 'red':
      return {
        text: '#D30000',
        background: '#FFE0E0',
      };
    case 'blue':
      return {
        text: '#4B6DF4',
        background: 'rgba(100, 144, 255, 0.2)',
      };
    case 'white':
      return {
        text: '#000000',
        background: '#ffffff',
      };
    default:
      return {
        text: '#000000',
        background: '#EAEAEA',
      };
  }
}

/* eslint-disable-next-line */
export interface ReactChipProps {
  color: ColorType;
  children?: React.ReactNode;
  dot?: boolean;
  icon?: React.ReactNode;
  clickable?: boolean;
  onClick?: () => void;
}

export const ReactChip: React.FC<ReactChipProps> = ({
  color,
  children,
  dot = true,
  icon,
  clickable = false,
  onClick,
}) => {
  const colors = getColor(color);

  return (
    <div onClick={clickable && onClick ? onClick : undefined}>
      <div
        className={cx(styles['container'], clickable && styles['clickable'])}
        style={{ backgroundColor: colors.background }}
      >
        {dot && (
          <div
            className={styles['dot']}
            style={{ backgroundColor: colors.text }}
          />
        )}
        {icon && (
          <div className={styles['icon']} style={{ color: colors.text }}>
            {icon}
          </div>
        )}
        <div className={styles['text']} style={{ color: colors.text }}>
          {children}
        </div>
      </div>
    </div>
  );
};
