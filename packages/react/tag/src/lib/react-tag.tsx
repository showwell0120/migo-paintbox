import classNames from 'classnames/bind';
import styles from './react-tag.module.scss';

const cx = classNames.bind(styles);

type TextColorType = 'white' | 'default';
type BackgoundColorType = 'red' | 'blue' | 'purple' | 'default';

function getTextColor(type?: TextColorType) {
  switch (type) {
    case 'white':
      return '#ffffff';
    default:
      return '#000000';
  }
}

function getBackgroundColor(type?: BackgoundColorType) {
  switch (type) {
    case 'red':
      return '#E02828';
    case 'purple':
      return '#9C27B0';
    case 'blue':
      return '#3453DA';
    default:
      return '#E9ECEF';
  }
}

/* eslint-disable-next-line */
export interface ReactTagProps {
  text: string;
  colorType?: TextColorType;
  bgColorType?: BackgoundColorType;
  hasBorder?: boolean;
}

export const ReactTag: React.FC<ReactTagProps> = ({
  text,
  colorType = 'default',
  bgColorType = 'default',
  hasBorder,
}) => {
  const color = getTextColor(colorType);
  const backgroundColor = getBackgroundColor(bgColorType);

  return (
    <div
      className={cx(styles['container'], hasBorder && styles['border'])}
      style={{ color, backgroundColor }}
    >
      {text}
    </div>
  );
};
